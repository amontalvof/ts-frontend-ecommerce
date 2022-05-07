// ! Open and Close Comment Modal

export const openCommentModal = (id: number) => ({
    type: 'OPEN_COMMENT_MODAL',
    payload: id,
});

export const closeCommentModal = () => ({
    type: 'CLOSE_COMMENT_MODAL',
});
