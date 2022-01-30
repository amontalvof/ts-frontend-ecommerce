import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootStore } from '../../redux/store';
import GridButtons from './gridButtons';
import GridPrice from './gridPrice';
import GridTitle from './gridTitle';
import { StyledFigure, StyledImg } from './styles';

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
    const state = useSelector((state: RootStore) => state);
    const { plantillaReducer } = state;
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];
    return (
        <>
            <StyledFigure>
                <Link to={ruta}>
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
                plantillaStyles={plantillaStyles}
            />
            <GridPrice precio={precio} oferta={oferta} />
            <GridButtons tipo={tipo} plantillaStyles={plantillaStyles} />
        </>
    );
};

export default GridCard;
