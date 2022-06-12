import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { redError, white } from '../../constants';
import { fetchWithToken } from '../../helpers/fetch';
import { TStyle } from '../../interfaces/plantilla';
import { openAuthModal } from '../../redux/actions';
import { RootStore } from '../../redux/store';
import ButtonCard from '../ButtonCard';
import RenderIf from '../RenderIf';
import { ButtonsContainer } from './styles';

interface IListButtonsProps {
    ruta: string;
    tipo: string;
    precio?: number;
    plantillaStyles?: TStyle;
    productId: number;
    showRemove?: boolean;
}

const ListButtons = ({
    productId,
    tipo,
    plantillaStyles,
    ruta,
    precio,
    showRemove,
}: IListButtonsProps) => {
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

    const handleTrashClick = () => {
        console.log('Trash clicked');
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
