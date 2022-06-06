import styled from 'styled-components';

interface IStyledButtonProps {
    colortexto?: string;
    colorfondo?: string;
}

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
