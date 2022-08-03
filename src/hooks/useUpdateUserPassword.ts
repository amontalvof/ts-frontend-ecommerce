import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { fetchWithToken } from '../helpers/fetch';

const updateUserPassword = async ({
    uid,
    passwords,
}: {
    passwords: {
        updPassword1: string;
        updPassword2: string;
    };
    uid?: number;
}) => {
    const resp = await fetchWithToken(
        `user/update/pass/${uid}`,
        { ...passwords },
        'PUT'
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

const useUpdateUserPassword = () => {
    return useMutation(updateUserPassword);
};

export default useUpdateUserPassword;
