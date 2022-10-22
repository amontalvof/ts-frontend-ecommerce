import { IProduct } from '../../interfaces/product';
import { RenderIf } from '../RenderIf';
import { FeaturedImage, StyledIframe, VideoViewerContainer } from './styles';

interface IVideoViewerProps {
    infoProduct: IProduct;
}

export const VideoViewer = ({ infoProduct }: IVideoViewerProps) => {
    const { multimedia: videoId, portada } = infoProduct;
    const src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=0`;
    return (
        <VideoViewerContainer>
            <RenderIf isTrue={!videoId}>
                <FeaturedImage
                    src={portada}
                    alt="product"
                    className="img-thumbnail"
                />
            </RenderIf>
            <RenderIf isTrue={!!videoId}>
                <StyledIframe
                    title="virtual product"
                    src={src}
                    width="100%"
                    frameBorder="0"
                    allowFullScreen
                />
            </RenderIf>
        </VideoViewerContainer>
    );
};
