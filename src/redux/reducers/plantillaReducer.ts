import {
    StylesDispatchTypes,
    TStyles,
    STYLES_LOADING,
    STYLES_SUCCESS,
    STYLES_FAIL,
} from '../../interfaces/plantilla';

interface IInitialState {
    loading: boolean;
    styles?: TStyles;
}

const initialState: IInitialState = {
    loading: true,
};

export const plantillaReducer = (
    state: IInitialState = initialState,
    action: StylesDispatchTypes
) => {
    switch (action.type) {
        case STYLES_FAIL:
            return {
                ...state,
                loading: false,
            };
        case STYLES_LOADING:
            return {
                ...state,
                loading: true,
            };
        case STYLES_SUCCESS:
            return {
                ...state,
                loading: false,
                styles: action.payload,
            };
        default:
            return state;
    }
};
