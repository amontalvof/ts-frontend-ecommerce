import styled from 'styled-components';

export const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    flex-grow: 1;
`;

export const VerifyContainer = styled.div`
    color: #333;

    /*=============================================
    ESCRITORIO GRANDE (LG revisamos en 1366px en adelante)
    =============================================*/

    @media (min-width: 1200px) {
        h1 {
            font-size: 150px;
            text-shadow: 8px 8px 1px #dadada;
        }
    }

    /*=============================================
    ESCRITORIO MEDIANO O TABLET HORIZONTAL (MD revisamos en 1024px)
    =============================================*/

    @media (max-width: 1199px) and (min-width: 992px) {
        h1 {
            font-size: 150px;
            text-shadow: 6px 6px 1px #dadada;
        }
    }

    /*=============================================
    ESCRITORIO PEQUEÑO O TABLET VERTICAL (SM revisamos en 768px)
    =============================================*/

    @media (max-width: 991px) and (min-width: 768px) {
        h1 {
            font-size: 100px;
            text-shadow: 4px 4px 1px #dadada;
        }
    }

    /*=============================================
    MOVIL (XS revisamos en 320px)
    =============================================*/

    @media (max-width: 767px) {
        margin-bottom: 20px;
        h1 {
            font-size: 50px;
            text-shadow: 2px 2px 1px #dadada;
        }
    }
`;
