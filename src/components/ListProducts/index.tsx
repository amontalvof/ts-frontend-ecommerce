import { useState } from 'react';
import { toast } from 'react-toastify';
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
    const [finalProducts, setFinalProducts] = useState(products);

    const handleSuccess = (
        data: any,
        variables: {
            deseosId: number;
        }
    ) => {
        const { deseosId } = variables;
        if (data.ok) {
            const newProducts = finalProducts.filter(
                (product) => product.deseosId !== deseosId
            );
            setFinalProducts(newProducts);
            toast.success(data.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            toast.error(data.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    const handleError = (error: any) => {
        toast.error(error.message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    const { mutate } = useRemoveFromWishList(handleSuccess, handleError);

    const handleRemove = async (deseosId?: number) => {
        if (deseosId) {
            mutate({ deseosId });
        }
    };

    return (
        <StyledUl>
            {finalProducts.map((product, index) => (
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
