import { FaHeart, FaEye, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TStyle } from '../../interfaces/plantilla';
import { StyledButton, IconContainer, ButtonsContainer } from './styles';

interface IListButtonsProps {
    tipo: string;
    plantillaStyles?: TStyle;
}

const ListButtons = ({ tipo, plantillaStyles }: IListButtonsProps) => {
    const isVirtual = tipo === 'virtual';

    return (
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
    );
};

export default ListButtons;
