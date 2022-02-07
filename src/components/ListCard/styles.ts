import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IStyledBadgeProps {
    colortexto?: string;
    colorfondo?: string;
}
interface IStyledButtonProps extends IStyledBadgeProps {}

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

export const StyledTitle = styled.h1`
    margin-top: 5px;
`;

export const TitleContentContainer = styled.div`
    display: flex;
    align-items: center;
    color: #777;
    text-transform: uppercase;
    @media (max-width: 767px) {
        font-size: 12px;
        font-weight: 700;
    }
`;

export const StyledLink = styled(Link)`
    color: #777;
`;

export const StyledBadge = styled.span<IStyledBadgeProps>`
    font-size: 12px;
    background-color: ${(props) => props.colorfondo};
    color: ${(props) => props.colortexto};
    margin-left: 5px;
`;

export const StyledOferta = styled.strong`
    text-decoration: line-through;
    color: #ccc;
    font-size: 12px;
`;

export const StyledButton = styled.button<IStyledButtonProps>`
    margin: 2px;
    svg {
        color: #999;
    }
    :hover {
        background-color: ${(props) => props.colorfondo};
        svg {
            color: ${(props) => props.colortexto};
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
    justify-content: flex-start;
`;
