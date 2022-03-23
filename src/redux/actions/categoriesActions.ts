import { fetchWithoutToken } from '../../helpers/fetch';
import { AppDispatch } from '../store';
import {
    CATEGORIES_FAIL,
    CATEGORIES_LOADING,
    CATEGORIES_SUCCESS,
} from '../../interfaces/categories';

export const getCategories = () => {
    return async (dispatch: AppDispatch) => {
        dispatch({
            type: CATEGORIES_LOADING,
        });
        const resp = await fetchWithoutToken('products/categories');
        const body = await resp.json();
        if (body.ok) {
            return dispatch({
                type: CATEGORIES_SUCCESS,
                payload: body.categories,
            });
        }
        return dispatch({
            type: CATEGORIES_FAIL,
        });
    };
};
