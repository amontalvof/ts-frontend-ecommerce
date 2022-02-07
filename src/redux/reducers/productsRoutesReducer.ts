import {
    RoutesDispatchTypes,
    TRoutes,
    ROUTES_LOADING,
    ROUTES_SUCCESS,
    ROUTES_FAIL,
} from '../../interfaces/productRoutes';

interface IInitialState {
    loading: boolean;
    routes?: TRoutes;
}

const initialState: IInitialState = {
    loading: true,
};

export const productsRoutesReducer = (
    state: IInitialState = initialState,
    action: RoutesDispatchTypes
) => {
    switch (action.type) {
        case ROUTES_FAIL:
            return {
                ...state,
                loading: false,
            };
        case ROUTES_LOADING:
            return {
                ...state,
                loading: true,
            };
        case ROUTES_SUCCESS:
            return {
                ...state,
                loading: false,
                routes: action.payload,
            };
        default:
            return state;
    }
};
