import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IProduct } from '../../interfaces/product';
import { RootStore } from '../../redux/store';
import GridButtons from './gridButtons';
import GridPrice from './gridPrice';
import GridTitle from './gridTitle';
import { StyledFigure, StyledImg } from './styles';

export const GridCard = ({
    id,
    ruta,
    portada,
    titulo,
    descuentoOferta,
    nuevo,
    precio,
    precioOferta,
    oferta,
    tipo,
    categoriaRuta,
    subcategoriaRuta,
    peso,
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
            <GridPrice
                precio={precio}
                oferta={oferta}
                precioOferta={precioOferta}
            />
            <GridButtons
                productId={id}
                tipo={tipo}
                precio={precio}
                plantillaStyles={plantillaStyles}
                ruta={`/${categoriaRuta}/${subcategoriaRuta}/${ruta}`}
                portada={portada}
                titulo={titulo}
                peso={peso}
                precioOferta={precioOferta}
                oferta={oferta}
            />
        </>
    );
};
