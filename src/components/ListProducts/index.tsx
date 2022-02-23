import { nanoid } from 'nanoid';
import { IProduct } from '../../interfaces/product';
import { ListCard } from '../ListCard';
import { StyledUl } from './styles';

interface IListProducts {
    products?: IProduct[];
}

export const ListProducts = ({ products = [] }: IListProducts) => {
    return (
        <StyledUl>
            {products.map((product) => (
                <li key={nanoid(10)} className="col-xs-12">
                    <ListCard {...product} />
                </li>
            ))}
        </StyledUl>
    );
};
