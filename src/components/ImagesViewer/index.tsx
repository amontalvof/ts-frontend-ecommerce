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
} from './styles';

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

export const ImagesViewer = () => {
    const [activeImage, setActiveImage] = useState(images[0]);
    const slideshowRef = useRef(null) as React.MutableRefObject<any>;

    const handleHover = (image: { src: string }) => {
        setActiveImage(image);
    };

    const handleClick = (direction: string) => {
        if (direction === 'left') {
            slideshowRef.current.scrollLeft -= 180;
        } else {
            slideshowRef.current.scrollLeft += 180;
        }
    };

    return (
        <ImagesViewerContainer>
            <FeaturedImage src={activeImage.src} alt="product" />
            <SlideWrapper>
                <LeftArrow onClick={() => handleClick('left')} />
                <Slider ref={slideshowRef}>
                    {images.map((image) => {
                        const active = image.src === activeImage.src;
                        return (
                            <ThumbnailImage
                                key={nanoid(10)}
                                src={image.src}
                                alt="product"
                                active={active}
                                onMouseEnter={() => handleHover(image)}
                            />
                        );
                    })}
                </Slider>
                <RightArrow onClick={() => handleClick('right')} />
            </SlideWrapper>
        </ImagesViewerContainer>
    );
};
