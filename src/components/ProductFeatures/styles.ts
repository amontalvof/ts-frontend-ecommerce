import styled from 'styled-components';

interface IStyledBadgeProps {
    colortexto?: string;
    colorfondo?: string;
}

export const StyledBadge = styled.span<IStyledBadgeProps>`
    background-color: ${(props) => props.colorfondo};
    color: ${(props) => props.colortexto};
`;

export const StyledOferta = styled.strong`
    text-decoration: line-through;
    color: #ccc;
    font-size: 16px;
`;

export const StyledUl = styled.ul`
    list-style-type: none;
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledLabel = styled.div`
    display: inline-flex;
    align-items: center;
`;
