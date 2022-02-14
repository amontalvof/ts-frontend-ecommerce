import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { BannerContainer, TextoBanner, StyledImage } from './styles';

const Banner = () => {
    const [scrollY, setScrollY] = useState<number>(0);
    const [scrollYCss, setScrollYCss] = useState<number>(0);
    const bannerRef = useRef(null) as MutableRefObject<any>;
    const bannerContainerOffset = bannerRef?.current?.offsetTop || 0;

    const setIt = () => {
        setScrollY(window.pageYOffset);
    };

    useEffect(() => {
        const isScrollYLessThanOffset = scrollY < bannerContainerOffset;
        if (isScrollYLessThanOffset) {
            setScrollYCss(scrollY);
        }
    }, [bannerContainerOffset, scrollY]);

    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener('scroll', setIt);
        };
        watchScroll();
        return () => {
            window.removeEventListener('scroll', setIt);
        };
    });

    return (
        <BannerContainer ref={bannerRef}>
            <StyledImage
                src="https://res.cloudinary.com/a03m02f92/image/upload/v1644382547/ecommerce/banner/default_pgwsus.jpg"
                className="img-responsive"
                width="100%"
                alt="products-banner"
                scrollYCss={scrollYCss}
            />
            <TextoBanner position="textoDer">
                <h1>SPECIAL OFFERS</h1>
                <h2>
                    <strong>50% off</strong>
                </h2>
                <h3>Ends October 31</h3>
            </TextoBanner>
        </BannerContainer>
    );
};

export default Banner;
