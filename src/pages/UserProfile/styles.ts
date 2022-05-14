import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px 0 0;
    padding: 0 0 40px;
`;

export const TabTitleContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledTabTitle = styled.span`
    margin-left: 5px;
`;

export const StyledTabLink = styled(Link)`
    color: #333333;
    :hover {
        color: #333333;
    }
`;

export const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const StyledTitle = styled.h1`
    margin-top: 0px;
    margin-bottom: 0px;
`;

export const StyledDate = styled.h4`
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const StyledH3 = styled.h3`
    margin-top: 10px;
    margin-bottom: 10px;

    /*=============================================
    MOVIL (XS revisamos en 320px)
    =============================================*/

    @media (max-width: 767px) {
        margin-top: 15px;
        margin-bottom: 5px;
    }
`;

export const ErrorContainer = styled.div`
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
    }
`;
