import { fetchWithoutToken } from '../../helpers/fetch';
import { AppDispatch } from '../store';
import {
    SUB_CATEGORIES_FAIL,
    SUB_CATEGORIES_LOADING,
    SUB_CATEGORIES_SUCCESS,
} from '../../interfaces/subCategories';

export const getSubCategories = () => {
    return async (dispatch: AppDispatch) => {
        dispatch({
            type: SUB_CATEGORIES_LOADING,
        });
        const resp = await fetchWithoutToken(
            'products/categories/subcategories'
        );
        const body = await resp.json();
        if (body.ok) {
            return dispatch({
                type: SUB_CATEGORIES_SUCCESS,
                payload: body.subCategories,
            });
        }
        return dispatch({
            type: SUB_CATEGORIES_FAIL,
        });
    };
};
