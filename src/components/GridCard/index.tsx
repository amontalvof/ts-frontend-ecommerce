import { Link } from 'react-router-dom';
import GridButtons from './gridButtons';
import GridPrice from './gridPrice';
import GridTitle from './gridTitle';
import { StyledFigure, StyledImg, StyledCard } from './styles';

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
        <StyledCard>
            <StyledFigure>
                <Link to={ruta} className="pixelProducto">
                    <StyledImg
                        src={imgOferta}
                        className="img-responsive"
                        alt="grid-product"
                    />
                </Link>
            </StyledFigure>
            <GridTitle
                ruta={ruta}
                titulo={titulo}
                descuentoOferta={descuentoOferta}
                nuevo={nuevo}
            />
            <GridPrice precio={precio} oferta={oferta} />
            <GridButtons tipo={tipo} />
        </StyledCard>
    );
};

export default GridCard;
