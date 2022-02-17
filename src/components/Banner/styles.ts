import styled from 'styled-components';

interface ITextoBannerProps {
    position: string;
}
interface IStyledImageProps {
    scrollYCss: number;
}

export const StyledImage = styled.img<IStyledImageProps>`
    margin-top: ${(props) => `${-props.scrollYCss / 2}px`};
    /*=============================================
    MOVIL (XS revisamos en 320px)
    =============================================*/
    @media (max-width: 767px) {
        margin-top: 0px;
    }
`;

export const BannerContainer = styled.figure`
    position: relative;
    overflow: hidden;
    margin: 20px auto;
    /*=============================================
    ESCRITORIO GRANDE (LG revisamos en 1366px en adelante)
    =============================================*/

    @media (min-width: 1200px) {
        height: 260px;
    }

    /*=============================================
    ESCRITORIO MEDIANO O TABLET HORIZONTAL (MD revisamos en 1024px)
    =============================================*/

    @media (max-width: 1199px) and (min-width: 992px) {
        height: 260px;
    }
    /*=============================================
    ESCRITORIO PEQUEÑO O TABLET VERTICAL (SM revisamos en 768px)
    =============================================*/

    @media (max-width: 991px) and (min-width: 768px) {
        height: 180px;
    }
    /*=============================================
    MOVIL (XS revisamos en 320px)
    =============================================*/

    @media (max-width: 767px) {
        height: 100px;
    }
`;

export const TextoBanner = styled.div<ITextoBannerProps>`
    position: absolute;
    font-family: 'Ubuntu Condensed', sans-serif;
    color: white;
    h1 {
        font-size: 35px;
        line-height: 25px;
    }
    h2 {
        font-size: 30px;
        line-height: 25px;
    }
    h3 {
        font-size: 24px;
        line-height: 25px;
    }
    ${(props) =>
        props.position === 'textoDer' &&
        `top:50px; 
        right:50px; 
        text-align:right;
    `}
    ${(props) =>
        props.position === 'textoIzq' &&
        `top: 50px;
        left: 50px;
        text-align: left;
    `}
    ${(props) =>
        props.position === 'textoCentro' &&
        `top: 50px;
        left: 50%;
        width: 800px;
        margin-left: -400px;
        text-align: center;
    `}
    /*=============================================
    ESCRITORIO PEQUEÑO O TABLET VERTICAL (SM revisamos en 768px)
    =============================================*/

    @media (max-width: 991px) and (min-width: 768px) {
        h1 {
            font-size: 30px;
            line-height: 15px;
        }

        h2 {
            font-size: 25px;
            line-height: 15px;
        }

        h3 {
            font-size: 25px;
            line-height: 15px;
        }

        top: 35px;
    }
    /*=============================================
    MOVIL (XS revisamos en 320px)
    =============================================*/

    @media (max-width: 767px) {
        top: 7px;
        left: 50%;
        width: 800px;
        margin-left: -400px;
        text-align: center;
        text-shadow: 2px 2px 20px black;

        h1 {
            font-size: 20px;
            line-height: 5px;
        }

        h2 {
            font-size: 20px;
            line-height: 5px;
        }

        h3 {
            font-size: 15px;
            line-height: 5px;
        }
    }
`;
