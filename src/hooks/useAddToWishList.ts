import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { fetchWithToken } from '../helpers/fetch';

const addToWishList = async ({
    productId,
    uid,
}: {
    productId: number;
    uid: number;
}) => {
    const resp = await fetchWithToken(
        `user/wish/new`,
        { idProducto: productId, idUsuario: uid },
        'POST'
    );
    const body = await resp.json();
    if (body.ok) {
        toast.success(body.message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    } else {
        toast.error(body.message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};

const useAddToWishList = () => {
    return useMutation(addToWishList);
};

export default useAddToWishList;
