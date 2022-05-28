import styled from 'styled-components';

export const CommentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const HeaderInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ImageContainer = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const ErrorContainer = styled.div`
    color: #333;
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    justify-content: center;

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
            font-size: 100px;
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
        h1 {
            font-size: 75px;
            text-shadow: 2px 2px 1px #dadada;
        }
        h2 {
            font-size: 20px;
        }
        margin-bottom: 100px;
    }
`;
