import { IProduct } from '../../interfaces/product';
import { StyledIframe, VideoViewerContainer } from './styles';

interface IVideoViewerProps {
    infoProduct: IProduct;
}
const VideoViewer = ({ infoProduct }: IVideoViewerProps) => {
    const src = `https://www.youtube.com/embed/bG7tIR4QS10?rel=0&autoplay=0`;
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
