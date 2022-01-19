import { fetchWithoutToken } from '../../helpers/fetch';
import {
    SLIDER_FAIL,
    SLIDER_LOADING,
    SLIDER_SUCCESS,
} from '../../interfaces/slider';

export const getSlider = () => {
    return async (dispatch: Function) => {
        dispatch({
            type: SLIDER_LOADING,
        });
        const resp = await fetchWithoutToken('slider');
        const body = await resp.json();
        if (body.ok) {
            return dispatch({
                type: SLIDER_SUCCESS,
                payload: body.slider,
            });
        }
        return dispatch({
            type: SLIDER_FAIL,
        });
    };
};
