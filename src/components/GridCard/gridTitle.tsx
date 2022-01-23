import { Link } from 'react-router-dom';

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
        <h4>
            <small>
                <Link to={ruta} className="pixelProducto">
                    {titulo}
                    <br />
                    {showBadge ? (
                        <>
                            <span className="label label-warning fontSize">
                                {newText}
                            </span>{' '}
                            <span className="label label-warning fontSize">
                                {discountText}
                            </span>
                        </>
                    ) : (
                        <>
                            <br />
                        </>
                    )}
                </Link>
            </small>
        </h4>
    );
};

export default GridTitle;
