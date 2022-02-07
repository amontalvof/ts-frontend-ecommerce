import { fetchWithoutToken } from '../../helpers/fetch';
import {
    ROUTES_FAIL,
    ROUTES_LOADING,
    ROUTES_SUCCESS,
} from '../../interfaces/productRoutes';

export const getProductRoutes = () => {
    return async (dispatch: Function) => {
        dispatch({
            type: ROUTES_LOADING,
        });
        const resp = await fetchWithoutToken('products/routes');
        const body = await resp.json();
        if (body.ok) {
            return dispatch({
                type: ROUTES_SUCCESS,
                payload: body.routes,
            });
        }
        return dispatch({
            type: ROUTES_FAIL,
        });
    };
};
