import { FaHeart, FaEye, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { TStyle } from '../../interfaces/plantilla';
import RenderIf from '../RenderIf';
import {
    EnlacesContainer,
    StyledButton,
    IconContainer,
    ButtonsContainer,
} from './styles';
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

    return (
        <>
            <EnlacesContainer className="col-xs-5">
                <ButtonsContainer>
                    <StyledButton
                        type="button"
                        className="btn btn-default btn-xs"
                        data-tip
                        data-for="tooltipHeart"
                        style={{ outline: 'none' }}
                        colortexto={plantillaStyles?.colorTexto}
                        colorfondo={plantillaStyles?.colorFondo}
                    >
                        <IconContainer>
                            <FaHeart />
                        </IconContainer>
                    </StyledButton>
                    <RenderIf isTrue={isVirtual && !isFree}>
                        <StyledButton
                            type="button"
                            className="btn btn-default btn-xs"
                            data-tip
                            data-for="tooltipCart"
                            style={{ outline: 'none' }}
                            colortexto={plantillaStyles?.colorTexto}
                            colorfondo={plantillaStyles?.colorFondo}
                        >
                            <IconContainer>
                                <FaShoppingCart />
                            </IconContainer>
                        </StyledButton>
                    </RenderIf>
                    <Link to={ruta}>
                        <StyledButton
                            type="button"
                            className="btn btn-default btn-xs"
                            data-tip
                            data-for="tooltipEye"
                            style={{ outline: 'none' }}
                            colortexto={plantillaStyles?.colorTexto}
                            colorfondo={plantillaStyles?.colorFondo}
                        >
                            <IconContainer>
                                <FaEye />
                            </IconContainer>
                        </StyledButton>
                    </Link>
                </ButtonsContainer>
            </EnlacesContainer>
            <ReactTooltip id="tooltipHeart" effect="solid">
                Add to my wish list
            </ReactTooltip>
            <ReactTooltip id="tooltipCart" effect="solid">
                Add to shopping cart
            </ReactTooltip>
            <ReactTooltip id="tooltipEye" effect="solid">
                See product
            </ReactTooltip>
        </>
    );
};

export default GridButtons;
