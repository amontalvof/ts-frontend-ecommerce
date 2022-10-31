import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { fetchWithToken } from '../helpers/fetch';
import { IOrder } from '../interfaces/orders';

const addOrders = async ({ data }: { data: IOrder[] }) => {
    const resp = await fetchWithToken(`user/orders`, { data }, 'POST');
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

const useInsertOrders = () => {
    return useMutation(addOrders);
};

export default useInsertOrders;
