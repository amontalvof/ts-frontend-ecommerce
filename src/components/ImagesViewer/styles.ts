import styled from 'styled-components';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

interface IThumbnailImageProps {
    active?: boolean;
}
export const ImagesViewerContainer = styled.div`
    margin: 20px auto;
`;

export const ImageContainer = styled.div`
    z-index: 1;
    position: relative;
`;

export const Lens = styled.div`
    z-index: 2;
    position: absolute;
    height: 125px;
    width: 125px;
    /* border: 1px solid black; */
    border-radius: 50%;
    background-repeat: no-repeat;
    cursor: crosshair;

    /*=============================================
    MOVIL (XS revisamos en 320px)
    =============================================*/

    @media (max-width: 767px) {
        display: none;
    }
`;

export const SlideWrapper = styled.div`
    max-width: 100%;
    display: flex;
    min-height: 100px;
    align-items: center;
`;

export const Slider = styled.div`
    width: 440px;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
    /*=============================================
    MOVIL (XS revisamos en 320px)
    =============================================*/

    @media (max-width: 767px) {
        width: 220px;
    }
`;

export const FeaturedImage = styled.img`
    max-width: 100%;
    max-height: 600px;
    object-fit: cover;
    cursor: pointer;
`;

export const ThumbnailImage = styled.img<IThumbnailImageProps>`
    object-fit: cover;
    max-width: 180px;
    max-height: 100px;
    cursor: pointer;
    opacity: 0.5;
    margin: 5px;

    ${(props) => props.active && 'opacity: 1;'}

    :hover {
        opacity: 1;
    }
`;

export const LeftArrow = styled(FaChevronCircleLeft)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.3s;
    margin-right: 5px;

    :hover {
        opacity: 0.5;
        width: 35px;
        height: 35px;
    }
`;

export const RightArrow = styled(FaChevronCircleRight)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.3s;
    margin-left: 5px;

    :hover {
        opacity: 0.5;
        width: 35px;
        height: 35px;
    }
`;
