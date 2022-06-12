import { nanoid } from 'nanoid';
import { IProduct } from '../../interfaces/product';
import { ListCard } from '../ListCard';
import { StyledUl } from './styles';

interface IListProducts {
    products?: IProduct[];
    showRemove?: boolean;
}

export const ListProducts = ({ products = [], showRemove }: IListProducts) => {
    return (
        <StyledUl>
            {products.map((product) => (
                <li key={nanoid(10)} className="col-xs-12">
                    <ListCard {...product} showRemove={showRemove} />
                </li>
            ))}
        </StyledUl>
    );
};
