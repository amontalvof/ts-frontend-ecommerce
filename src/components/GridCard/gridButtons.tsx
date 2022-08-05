import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { TStyle } from '../../interfaces/plantilla';
import { openAuthModal } from '../../redux/actions';
import { RootStore } from '../../redux/store';
import { ButtonCard } from '../ButtonCard';
import { RenderIf } from '../RenderIf';
import { EnlacesContainer, ButtonsContainer } from './styles';
import { useContext } from 'react';
import { CartContext } from '../../context/storageCart';
import useAddToWishList from '../../hooks/useAddToWishList';
interface IGridButtonsProps {
    ruta: string;
    tipo: string;
    portada: string;
    titulo: string;
    plantillaStyles?: TStyle;
    precio: number;
    peso?: number;
    productId: number;
    precioOferta: number;
    oferta: number;
}

const GridButtons = ({
    productId,
    tipo,
    plantillaStyles,
    ruta,
    precio,
    portada,
    titulo,
    peso,
    precioOferta,
    oferta,
}: IGridButtonsProps) => {
    const { addToCart } = useContext(CartContext);
    const { push } = useHistory();
    const isVirtual = tipo === 'virtual';
    const isFree = !precio;
    const dispatch = useDispatch();
    const state = useSelector((state: RootStore) => state);
    const { authReducer } = state;
    const { uid } = authReducer;
    const { mutate } = useAddToWishList();

    const handleHeartClick = async () => {
        if (uid) {
            mutate({ productId, uid });
        } else {
            dispatch(openAuthModal('login'));
        }
    };

    const handleCartClick = async () => {
        const newProduct = {
            productId,
            portada,
            titulo,
            precio,
            tipo,
            peso,
            precioOferta,
            oferta,
            cantidad: 1,
        };
        const result = await addToCart(newProduct, plantillaStyles?.colorFondo);
        if (result.isConfirmed) {
            push('/cart');
        }
    };

    return (
        <EnlacesContainer className="col-xs-5">
            <ButtonsContainer>
                <ButtonCard
                    icon="Heart"
                    colortexto={plantillaStyles?.colorTexto}
                    colorfondo={plantillaStyles?.colorFondo}
                    tooltipText="Add to my wish list"
                    onClick={handleHeartClick}
                />
                <RenderIf isTrue={isVirtual && !isFree}>
                    <ButtonCard
                        icon="Cart"
                        colortexto={plantillaStyles?.colorTexto}
                        colorfondo={plantillaStyles?.colorFondo}
                        tooltipText="Add to shopping cart"
                        onClick={handleCartClick}
                    />
                </RenderIf>
                <Link to={ruta}>
                    <ButtonCard
                        icon="Eye"
                        colortexto={plantillaStyles?.colorTexto}
                        colorfondo={plantillaStyles?.colorFondo}
                        tooltipText="See product"
                    />
                </Link>
            </ButtonsContainer>
        </EnlacesContainer>
    );
};

export default GridButtons;
