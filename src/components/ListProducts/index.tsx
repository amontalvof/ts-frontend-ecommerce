import useRemoveFromWishList from '../../hooks/useRemoveFromWishList';
import { IProduct } from '../../interfaces/product';
import { ListCard } from '../ListCard';
import { StyledUl } from './styles';

interface IWishObject extends IProduct {
    deseosId?: number;
}

interface IListProducts {
    products?: IWishObject[];
    showRemove?: boolean;
}

export const ListProducts = ({ products = [], showRemove }: IListProducts) => {
    const { mutate } = useRemoveFromWishList();

    const handleRemove = async (deseosId?: number) => {
        if (deseosId) {
            mutate({ deseosId });
        }
    };

    return (
        <StyledUl>
            {products.map((product, index) => (
                <li key={`final-products-${index}`} className="col-xs-12">
                    <ListCard
                        {...product}
                        showRemove={showRemove}
                        onRemove={handleRemove}
                    />
                </li>
            ))}
        </StyledUl>
    );
};
