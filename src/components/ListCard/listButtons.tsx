import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { redError, white } from '../../constants';
import { CartContext } from '../../context/storageCart';
import useAddToWishList from '../../hooks/useAddToWishList';
import { TStyle } from '../../interfaces/plantilla';
import { openAuthModal } from '../../redux/actions';
import { RootStore } from '../../redux/store';
import { ButtonCard } from '../ButtonCard';
import { RenderIf } from '../RenderIf';
import { ButtonsContainer } from './styles';

interface IListButtonsProps {
    ruta: string;
    tipo: string;
    precio: number;
    plantillaStyles?: TStyle;
    productId: number;
    deseosId?: number;
    portada: string;
    titulo: string;
    peso?: number;
    showRemove?: boolean;
    onRemove?: (deseosId?: number) => void;
}

const ListButtons = ({
    productId,
    tipo,
    plantillaStyles,
    ruta,
    precio,
    portada,
    titulo,
    peso,
    deseosId,
    showRemove,
    onRemove,
}: IListButtonsProps) => {
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

    const handleTrashClick = () => {
        onRemove && onRemove(deseosId);
    };

    const handleCartClick = async () => {
        const newProduct = {
            productId,
            portada,
            titulo,
            precio,
            tipo,
            peso,
            cantidad: 1,
        };
        const result = await addToCart(newProduct, plantillaStyles?.colorFondo);
        if (result.isConfirmed) {
            push('/cart');
        }
    };

    return (
        <ButtonsContainer>
            <RenderIf isTrue={!showRemove}>
                <ButtonCard
                    icon="Heart"
                    colortexto={plantillaStyles?.colorTexto}
                    colorfondo={plantillaStyles?.colorFondo}
                    tooltipText="Add to my wish list"
                    onClick={handleHeartClick}
                />
            </RenderIf>
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
            <RenderIf isTrue={!!showRemove}>
                <ButtonCard
                    icon="Trash"
                    colortexto={white}
                    colorfondo={redError}
                    tooltipText="Remove from my wish list"
                    onClick={handleTrashClick}
                />
            </RenderIf>
        </ButtonsContainer>
    );
};

export default ListButtons;
