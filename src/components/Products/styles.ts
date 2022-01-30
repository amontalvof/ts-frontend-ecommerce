import styled from 'styled-components';

export const ShowMoreButtonContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const TituloDestacadoContainer = styled.div`
    h1 {
        margin-top: -5px;
    }

    button span {
        margin-left: 5px;
    }

    /*=============================================
MOVIL (XS revisamos en 320px)
=============================================*/

    @media (max-width: 767px) {
        margin-bottom: 30px;
        h1 {
            text-align: center;
        }

        button {
            position: absolute;
            left: 50%;
            width: 40%;
            margin-left: -20%;
        }
    }
`;
