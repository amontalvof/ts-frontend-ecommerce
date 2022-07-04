import { uniqBy } from 'lodash';
import { getFromLocalStorageItem, setLocalStorageItem } from './manageStorage';

interface AddToCartParams {
    productId: number;
    portada: string;
    titulo: string;
    precio?: number;
    tipo: string;
    peso?: number;
    cantidad: number;
}

const addToCart = (newProduct: AddToCartParams) => {
    const cartProductList = getFromLocalStorageItem('productList');
    if (!!cartProductList) {
        const parsedCartProductList = JSON.parse(cartProductList);
        const newCartProductList = uniqBy(
            [...parsedCartProductList, newProduct],
            'productId'
        );
        setLocalStorageItem('productList', newCartProductList);
    } else {
        setLocalStorageItem('productList', [newProduct]);
    }
};

export default addToCart;
