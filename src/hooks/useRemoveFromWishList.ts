import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { fetchWithToken } from '../helpers/fetch';

const removeFromWishList = async ({ deseosId }: { deseosId: number }) => {
    const resp = await fetchWithToken(`user/wish/${deseosId}`, {}, 'DELETE');
    const body = await resp.json();
    return body;
};

const useRemoveFromWishList = () => {
    const queryClient = useQueryClient();
    return useMutation(removeFromWishList, {
        onSuccess: (data: any) => {
            if (data.ok) {
                queryClient.invalidateQueries('read-user-wishes');
                toast.success(data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            } else {
                toast.error(data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        },
        onError: (error: any) => {
            toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        },
    });
};

export default useRemoveFromWishList;
