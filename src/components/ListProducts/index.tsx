import { nanoid } from 'nanoid';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { fetchWithToken } from '../../helpers/fetch';
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

    const handleRemove = async (deseosId?: number) => {
        if (deseosId) {
            const resp = await fetchWithToken(
                `user/wish/${deseosId}`,
                {},
                'DELETE'
            );
            const body = await resp.json();
            if (body.ok) {
                const newProducts = finalProducts.filter(
                    (product) => product.deseosId !== deseosId
                );
                setFinalProducts(newProducts);
                toast.success(body.message, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            } else {
                toast.error(body.message, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        }
    };

    return (
        <StyledUl>
            {finalProducts.map((product) => (
                <li key={nanoid(10)} className="col-xs-12">
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
