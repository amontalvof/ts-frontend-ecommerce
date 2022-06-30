import { useDispatch, useSelector } from 'react-redux';
import { uniqBy } from 'lodash';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchWithToken } from '../../helpers/fetch';
import { TStyle } from '../../interfaces/plantilla';
import { openAuthModal } from '../../redux/actions';
import { RootStore } from '../../redux/store';
import ButtonCard from '../ButtonCard';
import RenderIf from '../RenderIf';
import { EnlacesContainer, ButtonsContainer } from './styles';
import {
    getFromLocalStorageItem,
    setLocalStorageItem,
} from '../../helpers/manageStorage';
interface IGridButtonsProps {
    ruta: string;
    tipo: string;
    portada: string;
    titulo: string;
    plantillaStyles?: TStyle;
    precio?: number;
    peso?: number;
    productId: number;
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
}: IGridButtonsProps) => {
    const isVirtual = tipo === 'virtual';
    const isFree = !precio;
    const dispatch = useDispatch();
    const state = useSelector((state: RootStore) => state);
    const { authReducer } = state;
    const { uid } = authReducer;

    const handleHeartClick = async () => {
        if (uid) {
            const resp = await fetchWithToken(
                `user/wish/new`,
                { idProducto: productId, idUsuario: uid },
                'POST'
            );
            const body = await resp.json();
            if (body.ok) {
                toast.success(body.message, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            } else {
                toast.error(body.message, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        } else {
            dispatch(openAuthModal('login'));
        }
    };

    const handleCartClick = () => {
        const newProduct = {
            productId,
            portada,
            titulo,
            precio,
            tipo,
            peso,
            cantidad: 1,
        };
        const cartProductList = getFromLocalStorageItem('productList');
        if (!!cartProductList) {
            const parsedCartProductList = JSON.parse(cartProductList);
            const newCartProductList = uniqBy(
                [...parsedCartProductList, newProduct],
                'productId'
            );
            setLocalStorageItem('productList', newCartProductList);
        } else {
            setLocalStorageItem('productList', [newProduct]);
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
