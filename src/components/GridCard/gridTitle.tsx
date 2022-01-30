import { TStyle } from '../../interfaces/plantilla';
import { StyledSmall, StyledLink, StyledBadge, StyledTitle } from './styles';
interface IGridTitleProps {
    ruta: string;
    titulo: string;
    descuentoOferta?: number;
    nuevo?: boolean;
    plantillaStyles?: TStyle;
}

const GridTitle = ({
    ruta,
    titulo,
    descuentoOferta,
    nuevo,
    plantillaStyles,
}: IGridTitleProps) => {
    const showBadge = descuentoOferta || nuevo;
    const newText = nuevo && 'New';
    const discountText = descuentoOferta && `${descuentoOferta}% off`;

    return (
        <StyledTitle>
            <StyledSmall>
                <StyledLink to={ruta} className="pixelProducto">
                    {titulo}
                    <br />
                    {showBadge ? (
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
                    ) : (
                        <>
                            <br />
                        </>
                    )}
                </StyledLink>
            </StyledSmall>
        </StyledTitle>
    );
};

export default GridTitle;
