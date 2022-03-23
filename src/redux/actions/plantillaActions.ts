import { fetchWithoutToken } from '../../helpers/fetch';
import { AppDispatch } from '../store';
import {
    STYLES_FAIL,
    STYLES_LOADING,
    STYLES_SUCCESS,
} from '../../interfaces/plantilla';

export const getStyles = () => {
    return async (dispatch: AppDispatch) => {
        dispatch({
            type: STYLES_LOADING,
        });
        const resp = await fetchWithoutToken('plantilla');
        const body = await resp.json();
        if (body.ok) {
            return dispatch({
                type: STYLES_SUCCESS,
                payload: body.styles,
            });
        }
        return dispatch({
            type: STYLES_FAIL,
        });
    };
};
