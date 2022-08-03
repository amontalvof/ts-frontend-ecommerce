import { useMutation } from 'react-query';
import Swal from 'sweetalert2';
import { redError } from '../constants';
import { fetchWithToken } from '../helpers/fetch';

const deleteUserAccount = async ({
    uid,
    modo,
    foto,
    colorfondo,
}: {
    uid?: number;
    foto?: string;
    modo?: string;
    colorfondo?: string;
}) => {
    const result = await Swal.fire({
        title: 'Are you sure you want to delete your account?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: colorfondo,
        cancelButtonColor: redError,
        confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
        const resp = await fetchWithToken(
            `user/${uid}`,
            { modo, foto },
            'DELETE'
        );
        const body = await resp.json();
        return body;
    }
};

const useDeleteUserAccount = (
    onSuccess: (data: any) => void,
    onError: (error: any) => void
) => {
    return useMutation(deleteUserAccount, { onSuccess, onError });
};

export default useDeleteUserAccount;
