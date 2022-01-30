import ListCard from '../ListCard';
import { StyledUl } from './styles';

interface IProduct {
    id: number;
    ruta: string;
    imgOferta: string;
    titulo: string;
    precio: number;
    oferta?: number;
    descuentoOferta?: number;
    tipo: string;
    nuevo?: boolean;
    descripcion: string;
}

interface IListProducts {
    products?: IProduct[];
}

const ListProducts = ({ products = [] }: IListProducts) => {
    return (
        <StyledUl>
            {products.map((product) => (
                <li key={product.id} className="col-xs-12">
                    <ListCard {...product} />
                </li>
            ))}
        </StyledUl>
    );
};

export default ListProducts;
