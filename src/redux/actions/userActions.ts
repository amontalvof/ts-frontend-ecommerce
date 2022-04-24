import { toast } from 'react-toastify';
import { baseUrl } from '../../constants';
import { AppDispatch } from '../store';

export const startUploadUserImage = (params: any) => {
    return async (dispatch: AppDispatch) => {
        const url = `${baseUrl}/user/upload/img/${params.uid}`;
        const token = localStorage.getItem('token') || '';
        const resp = await fetch(url, {
            method: 'PUT',
            headers: {
                'x-token': token,
            },
            body: params.formData,
        });
        const body = await resp.json();
        if (body.ok) {
            dispatch(refreshUserImage(body.secure_url));
            toast.success(body.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            toast.error(body.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
        params.setLoadingImage(false);
    };
};

const refreshUserImage = (secureUrl: string) => {
    return { type: 'UPLOAD_IMAGE', payload: { foto: secureUrl } };
};
