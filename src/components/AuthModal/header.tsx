import { TStyle } from '../../interfaces/plantilla';
import { Title, XCloseButton } from './styles';

interface IHeaderProps {
    text: string;
    plantillaStyles: TStyle;
    closeModal: () => void;
}

const Header = ({ text, closeModal, plantillaStyles }: IHeaderProps) => {
    return (
        <>
            <Title
                colorfondo={plantillaStyles.colorFondo}
                colortexto={plantillaStyles.colorTexto}
            >
                {text}
            </Title>
            <XCloseButton
                onClick={closeModal}
                type="button"
                colortexto={plantillaStyles.colorTexto}
            >
                X
            </XCloseButton>
        </>
    );
};

export default Header;
