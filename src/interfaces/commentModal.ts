export const OPEN_COMMENT_MODAL = 'OPEN_COMMENT_MODAL';
export const CLOSE_COMMENT_MODAL = 'CLOSE_COMMENT_MODAL';

export interface UiCommentModalOpen {
    type: typeof OPEN_COMMENT_MODAL;
    payload: number;
}

export interface UiCommentModalClose {
    type: typeof CLOSE_COMMENT_MODAL;
}

export type UiCommentModalDispatchTypes =
    | UiCommentModalOpen
    | UiCommentModalClose;
