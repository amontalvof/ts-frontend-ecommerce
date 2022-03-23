export const OPEN_AUTH_MODAL = 'OPEN_AUTH_MODAL';
export const CLOSE_AUTH_MODAL = 'CLOSE_AUTH_MODAL';

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
