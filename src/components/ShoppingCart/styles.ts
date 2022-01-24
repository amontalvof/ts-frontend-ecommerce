import styled from 'styled-components';

export const Carrito = styled.div`
    margin: 20px 0;

    button {
        padding: 11px 15px 7px;
        border: 1px solid silver;
        border-radius: 0;
        outline: none;
    }

    p {
        padding: 2px;
        padding-left: 60px;
        border: 1px solid #aaa;
        font-size: 12px;
    }

    /*=============================================
    ESCRITORIO GRANDE (LG revisamos en 1366px en adelante)
    =============================================*/

    @media (min-width: 1200px) {
        padding-left: 100px;
    }

    /*=============================================
    ESCRITORIO MEDIANO O TABLET HORIZONTAL (MD revisamos en 1024px)
    =============================================*/

    @media (max-width: 1199px) and (min-width: 992px) {
        padding-left: 70px;
    }

    /*=============================================
    ESCRITORIO PEQUEÑO O TABLET VERTICAL (SM revisamos en 768px)
    =============================================*/

    @media (max-width: 991px) and (min-width: 768px) {
        padding-left: 55px;

        p {
            display: none;
        }
    }

    /*=============================================
    MOVIL (XS revisamos en 320px)
    =============================================*/

    @media (max-width: 767px) {
        margin: 0px;
    }
`;
