import { AuthLoginDispatchTypes } from '../../interfaces/authModal';

const initialState = {
    checking: true,
    uid: null,
    name: null,
    foto: null,
    email: null,
};

export const authReducer = (
    state = initialState,
    action: AuthLoginDispatchTypes
) => {
    switch (action.type) {
        case 'AUTH_LOGIN':
            return {
                ...state,
                ...action.payload,
                checking: false,
            };
        case 'AUTH_CHECKING_FINISH':
            return {
                ...state,
                checking: false,
            };
        case 'AUTH_LOGOUT':
            return {
                ...state,
                checking: false,
                uid: null,
                name: null,
            };
        default:
            return state;
    }
};
