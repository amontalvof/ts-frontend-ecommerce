import styled from 'styled-components';

interface ICategoriasContainerProps {
    hideCategories: boolean;
}

export const CategoriasContainer = styled.div<ICategoriasContainerProps>`
    position: relative;
    padding-bottom: 20px;
    transition: opacity 0.5s linear;

    ${(props) =>
        props.hideCategories
            ? `display: none; opacity: 0; animation: FadeOut 0.2s ease-in-out;`
            : `display: block; opacity: 1; animation: FadeIn 0.2s ease-in-out;`}

    @keyframes FadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes FadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    h4 {
        margin-top: 20px;
        margin-bottom: -10px;
    }

    /*=============================================
    MOVIL (XS revisamos en 320px)
    =============================================*/

    @media (max-width: 767px) {
        margin-bottom: 10px;
    }
`;
