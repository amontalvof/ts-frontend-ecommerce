import {
    CategoriesDispatchTypes,
    TCategories,
    CATEGORIES_LOADING,
    CATEGORIES_SUCCESS,
    CATEGORIES_FAIL,
} from '../../interfaces/categories';

interface IInitialState {
    loading: boolean;
    categories?: TCategories;
}

const initialState: IInitialState = {
    loading: true,
};

export const categoriesReducer = (
    state: IInitialState = initialState,
    action: CategoriesDispatchTypes
) => {
    switch (action.type) {
        case CATEGORIES_FAIL:
            return {
                ...state,
                loading: false,
            };
        case CATEGORIES_LOADING:
            return {
                ...state,
                loading: true,
            };
        case CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload,
            };
        default:
            return state;
    }
};
