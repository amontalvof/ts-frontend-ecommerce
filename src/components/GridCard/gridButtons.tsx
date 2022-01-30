import { FaHeart, FaEye, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TStyle } from '../../interfaces/plantilla';
import {
    EnlacesContainer,
    StyledButton,
    IconContainer,
    ButtonsContainer,
} from './styles';
interface IGridButtonsProps {
    tipo: string;
    plantillaStyles?: TStyle;
}

const GridButtons = ({ tipo, plantillaStyles }: IGridButtonsProps) => {
    const isVirtual = tipo === 'virtual';
    return (
        <EnlacesContainer className="col-xs-5">
            <ButtonsContainer>
                <StyledButton
                    type="button"
                    className="btn btn-default btn-xs"
                    data-toggle="tooltip"
                    title="Add to my wish list"
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
                        data-toggle="tooltip"
                        title="Add to shopping cart"
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
                        data-toggle="tooltip"
                        title="See product"
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
        </EnlacesContainer>
    );
};

export default GridButtons;
