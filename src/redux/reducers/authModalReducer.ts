import { UiAuthModalDispatchTypes } from '../../interfaces/authModal';

const initialState = {
    modalOpen: false,
};

export const uiAuthModalReducer = (
    state = initialState,
    action: UiAuthModalDispatchTypes
) => {
    switch (action.type) {
        case 'OPEN_AUTH_MODAL':
            return {
                ...state,
                modalOpen: true,
                payload: action?.payload,
            };
        case 'CLOSE_AUTH_MODAL':
            return {
                ...state,
                modalOpen: false,
            };
        default:
            return state;
    }
};
