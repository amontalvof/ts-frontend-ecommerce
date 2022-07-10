import { uniqBy } from 'lodash';
import Swal from 'sweetalert2';
import { redError } from '../constants';
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

const addToCart = async (newProduct: AddToCartParams, colorfondo?: string) => {
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
    const result = await Swal.fire({
        text: 'A new product has been added to the shopping cart.',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: colorfondo,
        cancelButtonColor: redError,
        cancelButtonText: 'Continue on this page',
        confirmButtonText: 'Go to cart',
    });
    return result;
};

export default addToCart;
