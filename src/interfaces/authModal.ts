export const OPEN_AUTH_MODAL = 'OPEN_AUTH_MODAL';
export const CLOSE_AUTH_MODAL = 'CLOSE_AUTH_MODAL';

export interface AuthModalOpen {
    type: typeof OPEN_AUTH_MODAL;
    payload: string;
}

export interface AuthModalClose {
    type: typeof CLOSE_AUTH_MODAL;
}

export type AuthModalDispatchTypes = AuthModalOpen | AuthModalClose;
