import styled from 'styled-components';

interface IStyledButtonProps {
    colorfondo?: string;
    colortexto?: string;
}

export const StyledButton = styled.button<IStyledButtonProps>`
    background-color: ${(props) => props.colorfondo};
    color: ${(props) => props.colortexto};
`;
