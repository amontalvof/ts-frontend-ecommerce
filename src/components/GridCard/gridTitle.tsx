import { StyledSmall, StyledLink, StyledBadge, StyledTitle } from './styles';
interface IGridTitleProps {
    ruta: string;
    titulo: string;
    descuentoOferta?: number;
    nuevo?: boolean;
}

const GridTitle = ({
    ruta,
    titulo,
    descuentoOferta,
    nuevo,
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
                            <StyledBadge className="label">
                                {newText}
                            </StyledBadge>{' '}
                            <StyledBadge className="label">
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
