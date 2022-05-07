import styled from 'styled-components';

interface ISubmitButtonProps {
    colorfondo?: string;
    colortexto?: string;
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
