import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { fetchWithoutToken } from '../../helpers/fetch';
import { IRegisterActionParams } from '../../interfaces/authModal';
import { AppDispatch, RootStore } from '../store';

export const openAuthModal = (authType: string) => ({
    type: 'OPEN_AUTH_MODAL',
    payload: authType,
});

export const closeAuthModal = () => ({
    type: 'CLOSE_AUTH_MODAL',
});

export const startRegister = (params: IRegisterActionParams) => {
    return async (dispatch: AppDispatch, getState: () => RootStore) => {
        const { plantillaReducer } = getState();
        const resp = await fetchWithoutToken('auth/new', { ...params }, 'POST');
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem(
                'token-init-time',
                new Date().getTime().toString()
            );
            const plantillaReducerState = plantillaReducer;
            const { styles = [] } = plantillaReducerState;
            const plantillaStyles = styles[0];
            dispatch(closeAuthModal());
            Swal.fire({
                title: 'Successfully registered!',
                text: `Please check your email inbox or SPAM folder in "${params.regEmail}" to verify the account!`,
                icon: 'success',
                confirmButtonColor: plantillaStyles.colorFondo,
            });
        } else {
            dispatch(closeAuthModal());
            toast.error(body.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };
};
