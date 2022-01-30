import { FaHeart, FaEye, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { StyledButton, IconContainer, ButtonsContainer } from './styles';

interface IListButtonsProps {
    tipo: string;
}
const ListButtons = ({ tipo }: IListButtonsProps) => {
    const isVirtual = tipo === 'virtual';

    return (
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
    );
};

export default ListButtons;
