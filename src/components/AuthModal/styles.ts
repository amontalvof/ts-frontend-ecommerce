import styled from 'styled-components';
import { redError } from '../../constants';

interface ISubmitButtonProps {
    colorfondo?: string;
    colortexto?: string;
}

interface IStyledAnchor {
    color?: string;
    darkencolor?: string;
}
interface IStyledButton {
    color?: string;
    darkencolor?: string;
}

export const ModalContent = styled.div`
    padding: 10px 10px 0;
    /*=============================================
    MOVIL (XS revisamos en 320px)
    =============================================*/
    @media (max-width: 500px) {
        max-width: 300px;
        padding: 0px;
    }
`;

export const ModalTitulo = styled.div`
    padding: 5px 0px;
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

export const StyledButton = styled.button<IStyledButton>`
    color: ${(props) => props.color};
    border: none;
    background-color: transparent;
    :hover {
        text-decoration: underline;
    }
`;

export const SubmitButton = styled.input<ISubmitButtonProps>`
    margin: 10px 0;
    background-color: ${(props) => props.colorfondo};
    color: ${(props) => props.colortexto};
    :hover {
        color: ${(props) => props.colortexto};
    }
    :focus {
        color: ${(props) => props.colortexto};
    }
`;

export const ReCaptchaContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const ForgotPasswordContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0 10px;
`;

export const GoogleLoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0 10px;
`;

export const StyledError = styled.p`
    display: flex;
    justify-content: center;
    color: ${redError};
`;
