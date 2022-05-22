export const OPEN_COMMENT_MODAL = 'OPEN_COMMENT_MODAL';
export const CLOSE_COMMENT_MODAL = 'CLOSE_COMMENT_MODAL';

export interface ICommentPayload {
    commentsId: number | null;
    productosId: number;
    calificacion: number;
    comentario: string;
}

export interface UiCommentModalOpen {
    type: typeof OPEN_COMMENT_MODAL;
    payload: ICommentPayload;
}

export interface UiCommentModalClose {
    type: typeof CLOSE_COMMENT_MODAL;
    payload: null;
}

export type UiCommentModalDispatchTypes =
    | UiCommentModalOpen
    | UiCommentModalClose;

export interface IReturnUiCommentModalReducer {
    modalOpen: boolean;
    payload: ICommentPayload | null;
}
