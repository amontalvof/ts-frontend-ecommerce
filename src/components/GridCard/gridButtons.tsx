import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TStyle } from '../../interfaces/plantilla';
import { openAuthModal } from '../../redux/actions';
import { RootStore } from '../../redux/store';
import ButtonCard from '../ButtonCard';
import RenderIf from '../RenderIf';
import { EnlacesContainer, ButtonsContainer } from './styles';
interface IGridButtonsProps {
    ruta: string;
    tipo: string;
    plantillaStyles?: TStyle;
    precio?: number;
}

const GridButtons = ({
    tipo,
    plantillaStyles,
    ruta,
    precio,
}: IGridButtonsProps) => {
    const isVirtual = tipo === 'virtual';
    const isFree = !precio;
    const dispatch = useDispatch();
    const state = useSelector((state: RootStore) => state);
    const { authReducer } = state;
    const { uid } = authReducer;

    const handleHeartClick = async () => {
        if (uid) {
            console.log(
                '%c****************grid********************',
                'color: black; background: cyan'
            );
        } else {
            dispatch(openAuthModal('login'));
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
