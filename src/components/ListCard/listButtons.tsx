import { FaHeart, FaEye, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { TStyle } from '../../interfaces/plantilla';
import { StyledButton, IconContainer, ButtonsContainer } from './styles';

interface IListButtonsProps {
    tipo: string;
    plantillaStyles?: TStyle;
}

const ListButtons = ({ tipo, plantillaStyles }: IListButtonsProps) => {
    const isVirtual = tipo === 'virtual';

    return (
        <>
            <ButtonsContainer>
                <StyledButton
                    type="button"
                    className="btn btn-default btn-xs"
                    data-tip
                    data-for="tooltipHeart"
                    style={{ outline: 'none' }}
                    colorTexto={plantillaStyles?.colorTexto}
                    colorFondo={plantillaStyles?.colorFondo}
                >
                    <IconContainer>
                        <FaHeart />
                    </IconContainer>
                </StyledButton>
                {isVirtual && (
                    <StyledButton
                        type="button"
                        className="btn btn-default btn-xs"
                        data-tip
                        data-for="tooltipCart"
                        style={{ outline: 'none' }}
                        colorTexto={plantillaStyles?.colorTexto}
                        colorFondo={plantillaStyles?.colorFondo}
                    >
                        <IconContainer>
                            <FaShoppingCart />
                        </IconContainer>
                    </StyledButton>
                )}
                <Link to="">
                    <StyledButton
                        type="button"
                        className="btn btn-default btn-xs"
                        data-tip
                        data-for="tooltipEye"
                        style={{ outline: 'none' }}
                        colorTexto={plantillaStyles?.colorTexto}
                        colorFondo={plantillaStyles?.colorFondo}
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
