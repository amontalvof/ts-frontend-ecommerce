import { UiAuthModalDispatchTypes } from '../../interfaces/authModal';

const initialState = {
    modalOpen: false,
    payload: '',
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
                payload: '',
            };
        default:
            return state;
    }
};
