import styled from 'styled-components';

interface IStyledTitleProps {
    colorfondo?: string;
    colortexto?: string;
}
interface ISubmitButtonProps {
    colorfondo?: string;
    colortexto?: string;
}
interface IXCloseButtonProps {
    colortexto?: string;
}

interface IStyledAnchor {
    color?: string;
    darkencolor?: string;
}

export const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export const ModalContent = styled.div`
    /*=============================================
    MOVIL (XS revisamos en 320px)
    =============================================*/
    @media (max-width: 500px) {
        max-width: 300px;
    }
`;

export const Title = styled.h3<IStyledTitleProps>`
    background-color: ${(props) => props.colorfondo};
    color: ${(props) => props.colortexto};
    text-align: center;
    margin-top: -5px;
    padding: 15px 0px;
    border-radius: 5px 5px 0px 0px;
`;

export const ModalTitulo = styled.div`
    padding: 5px 0px;
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

export const StyledAnchor = styled.a<IStyledAnchor>`
    cursor: pointer;
    color: ${(props) => props.color};
    :hover {
        text-decoration: underline;
        color: ${(props) => props.color};
    }
    :visited {
        color: ${(props) => props.color};
    }
`;

export const SubmitButton = styled.input<ISubmitButtonProps>`
    margin: 10px 0;
    background-color: ${(props) => props.colorfondo};
    color: ${(props) => props.colortexto};
    :hover {
        color: ${(props) => props.colortexto};
    }
`;
