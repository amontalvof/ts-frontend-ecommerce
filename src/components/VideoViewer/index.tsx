import { IProduct } from '../../interfaces/product';
import { StyledIframe, VideoViewerContainer } from './styles';

interface IVideoViewerProps {
    infoProduct: IProduct;
}
const VideoViewer = ({ infoProduct }: IVideoViewerProps) => {
    const { multimedia: videoId } = infoProduct;
    const src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=0`;
    return (
        <VideoViewerContainer>
            <StyledIframe
                title="virtual product"
                src={src}
                width="100%"
                frameBorder="0"
                allowFullScreen
            />
        </VideoViewerContainer>
    );
};

export default VideoViewer;
