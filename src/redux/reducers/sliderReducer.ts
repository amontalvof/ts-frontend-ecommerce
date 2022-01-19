import {
    SliderDispatchTypes,
    TSlider,
    SLIDER_LOADING,
    SLIDER_FAIL,
    SLIDER_SUCCESS,
} from '../../interfaces/slider';

interface IInitialState {
    loading: boolean;
    slider?: TSlider;
}

const initialState: IInitialState = {
    loading: true,
};

export const sliderReducer = (
    state: IInitialState = initialState,
    action: SliderDispatchTypes
) => {
    switch (action.type) {
        case SLIDER_FAIL:
            return {
                ...state,
                loading: false,
            };
        case SLIDER_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SLIDER_SUCCESS:
            return {
                ...state,
                loading: false,
                slider: action.payload,
            };
        default:
            return state;
    }
};
