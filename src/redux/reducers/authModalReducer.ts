import { AuthModalDispatchTypes } from '../../interfaces/authModal';

const initialState = {
    modalOpen: false,
};

export const authModalReducer = (
    state = initialState,
    action: AuthModalDispatchTypes
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
