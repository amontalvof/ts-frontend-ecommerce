import { useMutation } from 'react-query';
import { fetchWithoutToken } from '../helpers/fetch';

const updateUnverifiedUser = async ({
    valueRedUser,
}: {
    valueRedUser: { user: { id: number } };
}) => {
    const response = await fetchWithoutToken(
        `user/verify/${valueRedUser?.user?.id}`,
        { verificacion: 0 },
        'PUT'
    );
    const json = await response.json();
    return json;
};

const useUpdateUnverifiedUser = (
    onSuccess: (data: any) => void,
    onError: (error: any) => void
) => {
    return useMutation(updateUnverifiedUser, { onSuccess, onError });
};

export default useUpdateUnverifiedUser;
