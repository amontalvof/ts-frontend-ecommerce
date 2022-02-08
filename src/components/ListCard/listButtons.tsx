import { FaHeart, FaEye, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { TStyle } from '../../interfaces/plantilla';
import RenderIf from '../RenderIf';
import { StyledButton, IconContainer, ButtonsContainer } from './styles';

interface IListButtonsProps {
    ruta: string;
    tipo: string;
    precio?: number;
    plantillaStyles?: TStyle;
}

const ListButtons = ({
    tipo,
    plantillaStyles,
    ruta,
    precio,
}: IListButtonsProps) => {
    const isVirtual = tipo === 'virtual';
    const isFree = !precio;
    return (
        <>
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

export default ListButtons;
