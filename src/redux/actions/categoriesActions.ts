import { fetchWithoutToken } from '../../helpers/fetch';
import {
    CATEGORIES_FAIL,
    CATEGORIES_LOADING,
    CATEGORIES_SUCCESS,
} from '../../interfaces/categories';

export const getCategories = () => {
    return async (dispatch: Function) => {
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
