import { UiCardModalDispatchTypes } from '../../interfaces/cardModal';

const initialState = {
    modalOpen: false,
};

export const uiCardModalReducer = (
    state = initialState,
    action: UiCardModalDispatchTypes
) => {
    switch (action.type) {
        case 'OPEN_CARD_MODAL':
            return {
                ...state,
                modalOpen: true,
            };
        case 'CLOSE_CARD_MODAL':
            return {
                ...state,
                modalOpen: false,
            };
        default:
            return state;
    }
};
