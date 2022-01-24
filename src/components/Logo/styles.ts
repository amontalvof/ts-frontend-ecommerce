import styled from 'styled-components';

export const LogoContainer = styled.div`
    /*=============================================
    ESCRITORIO GRANDE (LG revisamos en 1366px en adelante)
    =============================================*/

    @media (min-width: 1200px) {
        img {
            padding: 20px 60px;
            padding-left: 0px;
        }
    }

    /*=============================================
    ESCRITORIO MEDIANO O TABLET HORIZONTAL (MD revisamos en 1024px)
    =============================================*/

    @media (max-width: 1199px) and (min-width: 992px) {
        img {
            padding: 25px 60px;
            padding-left: 0px;
        }
    }

    /*=============================================
    ESCRITORIO PEQUEÑO O TABLET VERTICAL (SM revisamos en 768px)
    =============================================*/

    @media (max-width: 991px) and (min-width: 768px) {
        img {
            padding: 30px 0px;
        }
    }

    /*=============================================
    MOVIL (XS revisamos en 320px)
    =============================================*/

    @media (max-width: 767px) {
        img {
            padding: 30px;
            padding-bottom: 10px;
        }
    }
`;
