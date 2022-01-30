import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IStyledBadgeProps {
    colorTexto?: string;
    colorFondo?: string;
}
interface IStyledButtonProps {
    colorTexto?: string;
    colorFondo?: string;
}

export const StyledFigure = styled.figure`
    overflow: hidden;
`;

export const StyledImg = styled.img`
    :hover {
        transition: 0.3s all ease;
        opacity: 0.8;
        transform: scale(1.1, 1.1);
    }
`;

export const StyledSmall = styled.small`
    color: #777;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
`;

export const StyledLink = styled(Link)`
    color: #777;
`;

export const StyledBadge = styled.span<IStyledBadgeProps>`
    font-size: 11px;
    background-color: ${(props) => props.colorFondo};
    color: ${(props) => props.colorTexto};
`;

export const PrecioContainer = styled.div`
    padding: 0;
    margin-top: -30px;
    padding-bottom: 20px;
`;

export const StyledOferta = styled.strong`
    text-decoration: line-through;
    color: #ccc;
    font-size: 12px;
`;

export const EnlacesContainer = styled.div`
    padding: 0;
    padding-bottom: 20px;
`;

export const StyledButton = styled.button<IStyledButtonProps>`
    margin: 2px;
    svg {
        color: #999;
    }
    :hover {
        background-color: ${(props) => props.colorFondo};
        svg {
            color: ${(props) => props.colorTexto};
        }
    }
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 3px 0;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const StyledTitle = styled.h4`
    margin-bottom: 10px;
`;
