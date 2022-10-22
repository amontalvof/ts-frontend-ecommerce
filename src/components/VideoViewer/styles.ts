import styled from 'styled-components';

export const VideoViewerContainer = styled.div`
    margin: 20px auto;
`;

export const FeaturedImage = styled.img`
    max-width: 100%;
    max-height: 600px;
    object-fit: cover;
`;

export const StyledIframe = styled.iframe`
    /*=============================================
    ESCRITORIO GRANDE (LG revisamos en 1366px en adelante)
    =============================================*/

    @media (min-width: 1200px) {
        height: 415px;
    }

    /*=============================================
    ESCRITORIO MEDIANO O TABLET HORIZONTAL (MD revisamos en 1024px)
    =============================================*/

    @media (max-width: 1199px) and (min-width: 992px) {
        height: 350px;
    }

    /*=============================================
    ESCRITORIO PEQUEÑO O TABLET VERTICAL (SM revisamos en 768px)
    =============================================*/

    @media (max-width: 991px) and (min-width: 768px) {
        height: 300px;
    }

    /*=============================================
    MOVIL (XS revisamos en 320px)
    =============================================*/

    @media (max-width: 767px) {
        height: 200px;
    }
`;
