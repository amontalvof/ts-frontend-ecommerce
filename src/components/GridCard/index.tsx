import { Link } from 'react-router-dom';
import GridButtons from './gridButtons';
import GridPrice from './gridPrice';
import GridTitle from './gridTitle';

interface IGridCardProps {
    ruta: string;
    imgOferta: string;
    titulo: string;
    descuentoOferta?: number;
    nuevo?: boolean;
    precio?: number;
    oferta?: number;
    tipo: string;
}

const GridCard = ({
    ruta,
    imgOferta,
    titulo,
    descuentoOferta,
    nuevo,
    precio,
    oferta,
    tipo,
}: IGridCardProps) => {
    return (
        <>
            <figure>
                <Link to={ruta} className="pixelProducto">
                    <img
                        src={imgOferta}
                        className="img-responsive"
                        alt="grid-product"
                    />
                </Link>
            </figure>
            <GridTitle
                ruta={ruta}
                titulo={titulo}
                descuentoOferta={descuentoOferta}
                nuevo={nuevo}
            />
            <GridPrice precio={precio} oferta={oferta} />
            <GridButtons tipo={tipo} />
        </>
    );
};

export default GridCard;
