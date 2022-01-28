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
                            <StyledBadge className="label label-warning fontSize">
                                {newText}
                            </StyledBadge>{' '}
                            <StyledBadge className="label label-warning fontSize">
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
