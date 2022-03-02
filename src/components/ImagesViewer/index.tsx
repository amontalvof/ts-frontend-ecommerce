import { useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import {
    FeaturedImage,
    Slider,
    SlideWrapper,
    ThumbnailImage,
    LeftArrow,
    RightArrow,
    ImagesViewerContainer,
    ImageContainer,
    Lens,
} from './styles';
import getCursor from '../../helpers/ getCursor';
import moveLens from '../../helpers/moveLens';

const images = [
    {
        src: 'https://res.cloudinary.com/a03m02f92/image/upload/v1646011746/ecommerce/multimedia/img-01_wowa7q.jpg',
    },
    {
        src: 'https://res.cloudinary.com/a03m02f92/image/upload/v1646011746/ecommerce/multimedia/img-02_jmq4kf.jpg',
    },
    {
        src: 'https://res.cloudinary.com/a03m02f92/image/upload/v1646011746/ecommerce/multimedia/img-03_nzudlh.jpg',
    },
    {
        src: 'https://res.cloudinary.com/a03m02f92/image/upload/v1646011746/ecommerce/multimedia/img-04_wgyyyf.jpg',
    },
];

type TImageZoomEvent = React.MouseEvent<HTMLImageElement, MouseEvent>;

export const ImagesViewer = () => {
    const [activeImage, setActiveImage] = useState(images[0]);
    const sliderRef = useRef(null) as React.MutableRefObject<any>;
    const imageRef = useRef(null) as React.MutableRefObject<any>;
    const lensRef = useRef(null) as React.MutableRefObject<any>;

    const handleHover = (image: { src: string }) => {
        setActiveImage(image);
    };

    const handleClick = (direction: string) => {
        if (direction === 'left') {
            sliderRef.current.scrollLeft -= 180;
        } else {
            sliderRef.current.scrollLeft += 180;
        }
    };

    const imageZoom = (event: TImageZoomEvent) => {
        const img = imageRef.current;
        const lens = lensRef.current;
        lens.style.backgroundImage = `url(${img.src})`;
        const ratio = 3;
        lens.style.backgroundSize =
            img.width * ratio + 'px ' + img.height * ratio + 'px';

        const pos = getCursor({ event, img });
        const { positionLeft, positionTop } = moveLens({ pos, lens, img });

        lens.style.left = positionLeft + 'px';
        lens.style.top = positionTop + 'px';

        lens.style.backgroundPosition =
            '-' + pos.x * ratio + 'px -' + pos.y * ratio + 'px';
    };

    return (
        <ImagesViewerContainer>
            <ImageContainer>
                <Lens ref={lensRef} onMouseMove={imageZoom} />
                <FeaturedImage
                    ref={imageRef}
                    src={activeImage.src}
                    alt="product"
                    className="img-thumbnail"
                    onMouseMove={imageZoom}
                />
            </ImageContainer>
            <SlideWrapper>
                <LeftArrow onClick={() => handleClick('left')} />
                <Slider ref={sliderRef}>
                    {images.map((image) => {
                        const active = image.src === activeImage.src;
                        return (
                            <ThumbnailImage
                                key={nanoid(10)}
                                src={image.src}
                                alt="product"
                                active={active}
                                onMouseEnter={() => handleHover(image)}
                                className="img-thumbnail"
                            />
                        );
                    })}
                </Slider>
                <RightArrow onClick={() => handleClick('right')} />
            </SlideWrapper>
        </ImagesViewerContainer>
    );
};
