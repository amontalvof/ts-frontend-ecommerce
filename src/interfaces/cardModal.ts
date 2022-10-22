export const OPEN_CARD_MODAL = 'OPEN_CARD_MODAL';
export const CLOSE_CARD_MODAL = 'CLOSE_CARD_MODAL';

export interface UiCardModalOpen {
    type: typeof OPEN_CARD_MODAL;
}

export interface UiCardModalClose {
    type: typeof CLOSE_CARD_MODAL;
}

export type UiCardModalDispatchTypes = UiCardModalOpen | UiCardModalClose;
