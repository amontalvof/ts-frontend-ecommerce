import { TStyle } from '../../interfaces/plantilla';
import {
    StyledTitle,
    StyledLink,
    StyledBadge,
    TitleContentContainer,
} from './styles';

interface IListTitleProps {
    ruta: string;
    titulo: string;
    descuentoOferta?: number;
    nuevo?: boolean;
    descripcion: string;
    plantillaStyles?: TStyle;
}
const ListTitle = ({
    ruta,
    titulo,
    descuentoOferta,
    nuevo,
    descripcion,
    plantillaStyles,
}: IListTitleProps) => {
    const showBadge = descuentoOferta || nuevo;
    const newText = nuevo && 'New';
    const discountText = descuentoOferta && `${descuentoOferta}% off`;
    return (
        <>
            <StyledTitle>
                <small>
                    <StyledLink to={ruta}>
                        <TitleContentContainer>
                            {titulo}
                            {showBadge && (
                                <>
                                    <StyledBadge
                                        className="label"
                                        colorTexto={plantillaStyles?.colorTexto}
                                        colorFondo={plantillaStyles?.colorFondo}
                                    >
                                        {newText}
                                    </StyledBadge>{' '}
                                    <StyledBadge
                                        className="label"
                                        colorTexto={plantillaStyles?.colorTexto}
                                        colorFondo={plantillaStyles?.colorFondo}
                                    >
                                        {discountText}
                                    </StyledBadge>
                                </>
                            )}
                        </TitleContentContainer>
                    </StyledLink>
                </small>
            </StyledTitle>
            <p className="text-muted">{descripcion}</p>
        </>
    );
};

export default ListTitle;