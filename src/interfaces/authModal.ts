import { IUserInfo } from './user';

export const OPEN_AUTH_MODAL = 'OPEN_AUTH_MODAL';
export const CLOSE_AUTH_MODAL = 'CLOSE_AUTH_MODAL';

export const AUTH_LOGIN = 'AUTH_LOGIN';
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const AUTH_CHECKING_FINISH = 'AUTH_CHECKING_FINISH';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export interface UiAuthModalOpen {
    type: typeof OPEN_AUTH_MODAL;
    payload: string;
}

export interface UiAuthModalClose {
    type: typeof CLOSE_AUTH_MODAL;
}

export type UiAuthModalDispatchTypes = UiAuthModalOpen | UiAuthModalClose;

export interface IRegisterActionParams {
    regName: string;
    regEmail: string;
    regPassword1: string;
    regPassword2: string;
    regTerms: boolean;
}
export interface IGoogleSignInParams {
    tokenId: string;
    type: string;
}
export interface ILoginActionParams {
    logEmail: string;
    logPassword: string;
}

export interface AuthLogin {
    type: typeof AUTH_LOGIN;
    payload: IUserInfo;
}

export interface UploadImage {
    type: typeof UPLOAD_IMAGE;
    payload: IUserInfo;
}

export interface AuthCheckingFinish {
    type: typeof AUTH_CHECKING_FINISH;
}

export interface AuthLogout {
    type: typeof AUTH_LOGOUT;
}

export type AuthLoginDispatchTypes =
    | AuthLogin
    | UploadImage
    | AuthCheckingFinish
    | AuthLogout;
