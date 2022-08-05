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
    onRemove?: (deseosId?: number) => void;
    deseosId?: number;
    id_producto?: number;
}

export const ListCard = ({
    id,
    id_producto,
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
    onRemove,
    deseosId,
    peso,
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
                    deseosId={deseosId}
                    showRemove={showRemove}
                    onRemove={onRemove}
                    productId={id_producto || id}
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
            </div>
            <div className="col-xs-12">
                <hr />
            </div>
        </>
    );
};
