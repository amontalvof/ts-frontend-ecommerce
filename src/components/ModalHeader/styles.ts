import styled from 'styled-components';

interface IStyledTitleProps {
    colorfondo?: string;
    colortexto?: string;
}

interface IXCloseButtonProps {
    colortexto?: string;
}

export const Title = styled.h3<IStyledTitleProps>`
    background-color: ${(props) => props.colorfondo};
    color: ${(props) => props.colortexto};
    text-align: center;
    margin-top: -5px;
    padding: 15px 0px;
    border-radius: 5px 5px 0px 0px;
`;

export const XCloseButton = styled.button<IXCloseButtonProps>`
    position: absolute;
    right: 27px;
    top: 15px;
    background-color: transparent;
    color: ${(props) => props.colortexto};
    border: none;
    opacity: 0.5;
    font-weight: bold;
    font-size: 16px;
    :hover {
        opacity: 1;
    }
`;
