import styled from 'styled-components';

interface IStyledButtonProps {
    isPageScrollBiggerThan200: boolean;
    colortexto?: string;
    colorfondo?: string;
}

export const StyledButton = styled.button<IStyledButtonProps>`
    position: fixed;
    right: 1.5rem;
    bottom: 1.5rem;
    background-color: ${(props) => props.colorfondo};
    color: ${(props) => props.colortexto};
    z-index: -100;
    opacity: 0;
    transition: all 0.3s linear;
    font-size: 2.5rem;
    line-height: 0;
    padding: 0.3rem 0.5rem;
    cursor: pointer;
    outline: none;
    border: 1px solid silver;
    border-radius: 0;

    ${(props) =>
        props.isPageScrollBiggerThan200 &&
        `
        z-index: 100;
        opacity: 1;
    `}
`;
