import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { RenderIf } from '../RenderIf';
import { BannerContainer, TextoBanner, StyledImage } from './styles';

interface IBannerProps {
    banner?: {
        id: number;
        ruta: string;
        img: string;
        titulo1: string;
        titulo2: string;
        titulo3: string;
        estilo: string;
    };
}

const defaultTitulo = '{"texto":"","color":""}';

export const Banner = ({ banner }: IBannerProps) => {
    const { img = '', titulo1, titulo2, titulo3, estilo = '' } = banner || {};
    const [scrollY, setScrollY] = useState<number>(0);
    const [scrollYCss, setScrollYCss] = useState<number>(0);
    const bannerRef = useRef(null) as MutableRefObject<any>;
    const bannerContainerOffset = bannerRef?.current?.offsetTop || 0;

    const parsedTitulo1 = JSON.parse(titulo1 || defaultTitulo);
    const parsedTitulo2 = JSON.parse(titulo2 || defaultTitulo);
    const parsedTitulo3 = JSON.parse(titulo3 || defaultTitulo);

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
        <RenderIf isTrue={!!banner}>
            <BannerContainer ref={bannerRef}>
                <StyledImage
                    src={img}
                    className="img-responsive"
                    width="100%"
                    alt="products-banner"
                    scrollYCss={scrollYCss}
                />
                <TextoBanner position={estilo}>
                    <h1 style={{ color: parsedTitulo1.color }}>
                        {parsedTitulo1.texto}
                    </h1>
                    <h2 style={{ color: parsedTitulo2.color }}>
                        <strong>{parsedTitulo2.texto}</strong>
                    </h2>
                    <h3 style={{ color: parsedTitulo3.color }}>
                        {parsedTitulo3.texto}
                    </h3>
                </TextoBanner>
            </BannerContainer>
        </RenderIf>
    );
};
