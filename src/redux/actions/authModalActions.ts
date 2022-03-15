export const openAuthModal = (authType: string) => ({
    type: 'OPEN_AUTH_MODAL',
    payload: authType,
});

export const closeAuthModal = () => ({
    type: 'CLOSE_AUTH_MODAL',
});
