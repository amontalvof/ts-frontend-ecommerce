import { UiCommentModalDispatchTypes } from '../../interfaces/commentModal';

const initialState = {
    modalOpen: false,
    payload: 0,
};

export const uiCommentModalReducer = (
    state = initialState,
    action: UiCommentModalDispatchTypes
) => {
    switch (action.type) {
        case 'OPEN_COMMENT_MODAL':
            return {
                ...state,
                modalOpen: true,
                payload: action?.payload,
            };
        case 'CLOSE_COMMENT_MODAL':
            return {
                ...state,
                modalOpen: false,
                payload: 0,
            };
        default:
            return state;
    }
};
