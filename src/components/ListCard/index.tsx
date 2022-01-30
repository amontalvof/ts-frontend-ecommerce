import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootStore } from '../../redux/store';
import ListButtons from './listButtons';
import ListPrice from './listPrice';
import ListTitle from './listTitle';
import { StyledFigure, StyledImg } from './styles';

interface IListCardProps {
    descripcion: string;
    ruta: string;
    imgOferta: string;
    titulo: string;
    descuentoOferta?: number;
    nuevo?: boolean;
    precio?: number;
    oferta?: number;
    tipo: string;
}

const ListCard = ({
    ruta,
    imgOferta,
    titulo,
    descuentoOferta,
    nuevo,
    precio,
    oferta,
    tipo,
    descripcion,
}: IListCardProps) => {
    const state = useSelector((state: RootStore) => state);
    const { plantillaReducer } = state;
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];
    return (
        <>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                <StyledFigure>
                    <Link to="">
                        <StyledImg
                            src={imgOferta}
                            className="img-responsive"
                            alt="list-product"
                        />
                    </Link>
                </StyledFigure>
            </div>
            <div className="col-lg-10 col-md-7 col-sm-8 col-xs-12">
                <ListTitle
                    ruta={ruta}
                    titulo={titulo}
                    descuentoOferta={descuentoOferta}
                    nuevo={nuevo}
                    descripcion={descripcion}
                    plantillaStyles={plantillaStyles}
                />
                <ListPrice precio={precio} oferta={oferta} />
                <ListButtons tipo={tipo} plantillaStyles={plantillaStyles} />
            </div>
            <div className="col-xs-12">
                <hr />
            </div>
        </>
    );
};

export default ListCard;
