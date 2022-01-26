import styled from 'styled-components';

interface IBotonProps {
    direction: string;
}

export const ContenedorPrincipal = styled.div`
    position: relative;
`;

export const ContenedorSlideshow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

export const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: 0.3s ease all;
    z-index: 10;
    position: relative;
    img {
        width: 100%;
        vertical-align: top;
    }
`;

export const TextoSlide = styled.div`
    width: 100%;
    padding: 10px 60px 5px;
    text-align: center;
    position: absolute;
    bottom: 0;
    font-size: 20px;
    background: rgba(0, 0, 0, 0.5);
    color: #ffffff;

    @media screen and (max-width: 700px) {
        font-size: 16px;
        position: relative;
        background: #000000;
    }
`;

export const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

export const Boton = styled.button<IBotonProps>`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: 0.3s ease all;

    ${(props) =>
        props.direction === 'left'
            ? `path { filter: drop-shadow(2px 0px 0px #fff);} left: 0;`
            : `path { filter: drop-shadow(-2px 0px 0px #fff);} right: 0;`}
`;
