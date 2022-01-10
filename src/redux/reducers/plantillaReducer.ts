import { STYLES_SUCCESS } from '../interfaces/plantilla';
import {
    StylesDispatchTypes,
    STYLES_LOADING,
    TStyles,
    STYLES_FAIL,
} from '../interfaces/plantilla';

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
                loading: false,
            };
        case STYLES_LOADING:
            return {
                loading: true,
            };
        case STYLES_SUCCESS:
            return {
                loading: false,
                styles: action.payload,
            };
        default:
            return state;
    }
};
