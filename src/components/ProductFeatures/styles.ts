import styled from 'styled-components';

interface IStyledBadgeProps {
    colortexto?: string;
    colorfondo?: string;
}
interface IStyledSelectProps {
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

export const StyledSelect = styled.select<IStyledSelectProps>`
    margin: 0 5px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 0;
    outline: 1px solid #777777;
    border-right: 10px solid transparent;

    :focus {
        outline: 1px solid ${(props) => props.colorfondo};
        box-shadow: 0px 0px 2px 2px ${(props) => props.colorfondo};
    }
`;

export const NoVirtualContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
