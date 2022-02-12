import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IProduct } from '../../interfaces/product';
import { RootStore } from '../../redux/store';
import GridButtons from './gridButtons';
import GridPrice from './gridPrice';
import GridTitle from './gridTitle';
import { StyledFigure, StyledImg } from './styles';

const GridCard = ({
    ruta,
    portada,
    titulo,
    descuentoOferta,
    nuevo,
    precio,
    oferta,
    tipo,
    categoriaRuta,
    subcategoriaRuta,
}: IProduct) => {
    const state = useSelector((state: RootStore) => state);
    const { plantillaReducer } = state;
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];
    return (
        <>
            <StyledFigure>
                <Link to={`/${categoriaRuta}/${subcategoriaRuta}/${ruta}`}>
                    <StyledImg
                        src={portada}
                        className="img-responsive"
                        alt="grid-product"
                    />
                </Link>
            </StyledFigure>
            <GridTitle
                ruta={`/${categoriaRuta}/${subcategoriaRuta}/${ruta}`}
                titulo={titulo}
                descuentoOferta={descuentoOferta}
                nuevo={nuevo}
                plantillaStyles={plantillaStyles}
            />
            <GridPrice precio={precio} oferta={oferta} />
            <GridButtons
                tipo={tipo}
                precio={precio}
                plantillaStyles={plantillaStyles}
                ruta={`/${categoriaRuta}/${subcategoriaRuta}/${ruta}`}
            />
        </>
    );
};

export default GridCard;
