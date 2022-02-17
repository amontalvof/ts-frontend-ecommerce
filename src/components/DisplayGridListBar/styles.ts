import styled from 'styled-components';

interface IStyledButtonProps {
    isSelected: boolean;
    colorfondo?: string;
    colortexto?: string;
}

export const StyledButton = styled.button<IStyledButtonProps>`
    ${(props) =>
        props.isSelected &&
        `
            background-color: ${props.colorfondo};
            color: ${props.colortexto};
    `}
    :focus {
        ${(props) =>
            props.isSelected &&
            `
            background-color: ${props.colorfondo};
            color: ${props.colortexto};
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

export const StyledLi = styled.li`
    cursor: pointer;
`;
