import { FaHeart, FaEye, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
    EnlacesContainer,
    StyledButton,
    IconContainer,
    ButtonsContainer,
} from './styles';
interface IGridButtonsProps {
    tipo: string;
}

const GridButtons = ({ tipo }: IGridButtonsProps) => {
    const isVirtual = tipo === 'virtual';
    return (
        <EnlacesContainer className="col-xs-5">
            <ButtonsContainer>
                <StyledButton
                    type="button"
                    className="btn btn-default btn-xs"
                    data-toggle="tooltip"
                    title="Add to my wish list"
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
