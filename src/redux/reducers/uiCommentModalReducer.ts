import {
    IReturnUiCommentModalReducer,
    UiCommentModalDispatchTypes,
} from '../../interfaces/commentModal';

const initialState = {
    modalOpen: false,
    payload: null,
};

export const uiCommentModalReducer = (
    state = initialState,
    action: UiCommentModalDispatchTypes
): IReturnUiCommentModalReducer => {
    switch (action.type) {
        case 'OPEN_COMMENT_MODAL':
            return {
                ...state,
                modalOpen: true,
                payload: action.payload,
            };
        case 'CLOSE_COMMENT_MODAL':
            return {
                ...state,
                modalOpen: false,
                payload: action.payload,
            };
        default:
            return state;
    }
};
