import styled from 'styled-components';

interface IStyledButtonProps {
    isSelected: boolean;
    colorFondo?: string;
    colorTexto?: string;
}

export const StyledButton = styled.button<IStyledButtonProps>`
    ${(props) =>
        props.isSelected &&
        `
            background-color: ${props.colorFondo};
            color: ${props.colorTexto};
    `}
    :focus {
        ${(props) =>
            props.isSelected &&
            `
            background-color: ${props.colorFondo};
            color: ${props.colorTexto};
        `}
    }
`;

export const IconTextContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledButtonText = styled.span`
    margin-left: 5px;
`;
