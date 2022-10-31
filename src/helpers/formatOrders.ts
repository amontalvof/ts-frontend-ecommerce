import { ICartObject } from '../context/storageCart';
import { IOrder } from '../interfaces/orders';
import { IUserInfo } from '../interfaces/user';

const formatOrders = (
    userInfo: IUserInfo,
    cartProductList: ICartObject[],
    address: string
): IOrder[] => {
    const newCartProductList = cartProductList.map((product) => {
        return {
            id_usuario: userInfo?.uid,
            id_producto: product.productId,
            direccion: address,
            envio: 0,
            metodo: 'card',
            email: userInfo?.email,
            pais: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };
    });
    return newCartProductList;
};

export default formatOrders;
