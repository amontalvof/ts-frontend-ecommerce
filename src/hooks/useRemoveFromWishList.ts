import { useMutation } from 'react-query';
import { fetchWithToken } from '../helpers/fetch';

const removeFromWishList = async ({ deseosId }: { deseosId: number }) => {
    const resp = await fetchWithToken(`user/wish/${deseosId}`, {}, 'DELETE');
    const body = await resp.json();
    return body;
};

const useRemoveFromWishList = (
    onSuccess: (
        data: any,
        variables: {
            deseosId: number;
        }
    ) => void,
    onError: (error: any) => void
) => {
    return useMutation(removeFromWishList, {
        onSuccess,
        onError,
    });
};

export default useRemoveFromWishList;
