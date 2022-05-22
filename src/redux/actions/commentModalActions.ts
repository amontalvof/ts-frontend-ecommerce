// ! Open and Close Comment Modal

import { ICommentPayload } from '../../interfaces/commentModal';

export const openCommentModal = (payload: ICommentPayload) => ({
    type: 'OPEN_COMMENT_MODAL',
    payload: payload,
});

export const closeCommentModal = () => ({
    type: 'CLOSE_COMMENT_MODAL',
    payload: null,
});
