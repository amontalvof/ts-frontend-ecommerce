import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { fetchWithoutToken, fetchWithToken } from '../../helpers/fetch';
import {
    IRegisterActionParams,
    ILoginActionParams,
} from '../../interfaces/authModal';
import { AppDispatch, RootStore } from '../store';

// ! Open and Close Auth Modal

export const openAuthModal = (authType: string) => ({
    type: 'OPEN_AUTH_MODAL',
    payload: authType,
});

export const closeAuthModal = () => ({
    type: 'CLOSE_AUTH_MODAL',
});

// ! Auth Register

export const startRegister = (params: IRegisterActionParams) => {
    return async (dispatch: AppDispatch, getState: () => RootStore) => {
        const { plantillaReducer } = getState();
        const resp = await fetchWithoutToken('auth/new', { ...params }, 'POST');
        const body = await resp.json();
        if (body.ok) {
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

// ! Auth Forgot Password

export const startForgotPassword = (params: { fgpEmail: string }) => {
    return async (dispatch: AppDispatch, getState: () => RootStore) => {
        const { plantillaReducer } = getState();
        const resp = await fetchWithoutToken(
            'auth/forgotPassword',
            { ...params },
            'PUT'
        );
        const body = await resp.json();
        if (body.ok) {
            const plantillaReducerState = plantillaReducer;
            const { styles = [] } = plantillaReducerState;
            const plantillaStyles = styles[0];
            dispatch(closeAuthModal());
            Swal.fire({
                title: 'New password request successful!',
                text: `Please check your email inbox or SPAM folder in "${params.fgpEmail}" to get your new password!`,
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

// ! Auth Login

export const startLogin = (params: ILoginActionParams) => {
    return async (dispatch: AppDispatch) => {
        const resp = await fetchWithoutToken('auth', { ...params }, 'POST');
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem(
                'token-init-time',
                new Date().getTime().toString()
            );
            const user = {
                uid: body.id,
                name: body.nombre,
                foto: body.foto,
                email: body.email,
            };
            dispatch(closeAuthModal());
            dispatch(login(user));
        } else {
            dispatch(closeAuthModal());
            toast.error(body.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };
};

const login = (user: {
    uid: number;
    name: string;
    foto: string;
    email: string;
}) => {
    return { type: 'AUTH_LOGIN', payload: user };
};

// ! Refresh token

export const startChecking = () => {
    return async (dispatch: AppDispatch) => {
        const resp = await fetchWithToken('auth/renew');
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem(
                'token-init-time',
                new Date().getTime().toString()
            );
            const user = {
                uid: body.id,
                name: body.nombre,
                foto: body.foto,
                email: body.email,
            };
            dispatch(login(user));
        } else {
            dispatch(checkingFinish());
        }
    };
};

const checkingFinish = () => ({
    type: 'AUTH_CHECKING_FINISH',
});

// ! Auth Logout

export const startLogout = () => {
    return (dispatch: AppDispatch) => {
        localStorage.clear();
        dispatch(logout());
    };
};

const logout = () => ({
    type: 'AUTH_LOGOUT',
});
