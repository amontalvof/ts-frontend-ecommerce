import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IStyledBadgeProps {
    colortexto?: string;
    colorfondo?: string;
}

interface IStyledLinkProps extends IStyledBadgeProps {}

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

export const StyledLink = styled(Link)<IStyledLinkProps>`
    color: #777;
    :hover {
        color: ${(props) => props.colorfondo};
    }
`;

export const StyledBadge = styled.span<IStyledBadgeProps>`
    font-size: 11px;
    background-color: ${(props) => props.colorfondo};
    color: ${(props) => props.colortexto};
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

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const StyledTitle = styled.h4`
    margin-bottom: 10px;
`;
