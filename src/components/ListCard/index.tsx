import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IProduct } from '../../interfaces/product';
import { RootStore } from '../../redux/store';
import ListButtons from './listButtons';
import ListPrice from './listPrice';
import ListTitle from './listTitle';
import { StyledFigure, StyledImg } from './styles';

interface IListCardProps extends IProduct {
    showRemove?: boolean;
}

export const ListCard = ({
    id,
    ruta,
    portada,
    titulo,
    descuentoOferta,
    nuevo,
    precioOferta,
    precio,
    oferta,
    tipo,
    descripcion,
    categoriaRuta,
    subcategoriaRuta,
    showRemove,
}: IListCardProps) => {
    const state = useSelector((state: RootStore) => state);
    const { plantillaReducer } = state;
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];
    return (
        <>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                <StyledFigure>
                    <Link to={`/${categoriaRuta}/${subcategoriaRuta}/${ruta}`}>
                        <StyledImg
                            src={portada}
                            className="img-responsive"
                            alt="list-product"
                        />
                    </Link>
                </StyledFigure>
            </div>
            <div className="col-lg-10 col-md-7 col-sm-8 col-xs-12">
                <ListTitle
                    ruta={`/${categoriaRuta}/${subcategoriaRuta}/${ruta}`}
                    titulo={titulo}
                    descuentoOferta={descuentoOferta}
                    nuevo={nuevo}
                    descripcion={descripcion}
                    plantillaStyles={plantillaStyles}
                />
                <ListPrice
                    precio={precio}
                    oferta={oferta}
                    precioOferta={precioOferta}
                />
                <ListButtons
                    showRemove={showRemove}
                    productId={id}
                    tipo={tipo}
                    precio={precio}
                    plantillaStyles={plantillaStyles}
                    ruta={`/${categoriaRuta}/${subcategoriaRuta}/${ruta}`}
                />
            </div>
            <div className="col-xs-12">
                <hr />
            </div>
        </>
    );
};
