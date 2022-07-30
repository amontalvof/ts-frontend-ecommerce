import { TStyle } from '../../interfaces/plantilla';
import { Title, XCloseButton } from './styles';

interface IModalHeaderProps {
    text: string;
    plantillaStyles: TStyle;
    closeModal: () => void;
}

export const ModalHeader = ({
    text,
    closeModal,
    plantillaStyles,
}: IModalHeaderProps) => {
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
