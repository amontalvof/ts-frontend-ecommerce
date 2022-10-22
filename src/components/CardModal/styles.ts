import styled from 'styled-components';
import { defaultBrand, gray, white } from '../../constants';

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

export const InputsContainers = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledInput = styled.input`
    padding: 0.375rem 0.75rem;
    margin: 10px 0 0;
    font-size: 16px;
    line-height: 1.5;
    color: ${gray};
    background-color: ${white};
    background-clip: padding-box;
    border: 1px solid ${gray};
    border-radius: 0.25rem;
    transition: border-color 0.15s;

    :focus {
        border: 1px solid ${defaultBrand};
    }
`;

export const SecondSection = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StyledButton = styled.button`
    margin: 20px 0;
    width: 100%;
    font-size: 16px;
`;
