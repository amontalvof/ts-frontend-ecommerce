import { TStyle } from '../../interfaces/plantilla';
import { StyledSmall, StyledLink, StyledBadge, StyledTitle } from './styles';
interface IGridTitleProps {
    ruta: string;
    titulo: string;
    descuentoOferta?: number;
    nuevo?: number;
    plantillaStyles?: TStyle;
}

const GridTitle = ({
    ruta,
    titulo,
    descuentoOferta,
    nuevo,
    plantillaStyles,
}: IGridTitleProps) => {
    const showBadge = !!descuentoOferta || !!nuevo;
    const newText = !!nuevo && 'New';
    const discountText = !!descuentoOferta && `${descuentoOferta}% off`;

    return (
        <StyledTitle>
            <StyledSmall>
                <StyledLink to={ruta} colorfondo={plantillaStyles?.colorFondo}>
                    {titulo}
                    <br />
                    {showBadge ? (
                        <>
                            <StyledBadge
                                className="label"
                                colortexto={plantillaStyles?.colorTexto}
                                colorfondo={plantillaStyles?.colorFondo}
                            >
                                {newText}
                            </StyledBadge>{' '}
                            <StyledBadge
                                className="label"
                                colortexto={plantillaStyles?.colorTexto}
                                colorfondo={plantillaStyles?.colorFondo}
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
