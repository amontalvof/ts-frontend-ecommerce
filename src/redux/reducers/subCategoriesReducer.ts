import {
    SubCategoriesDispatchTypes,
    TSubCategories,
    SUB_CATEGORIES_LOADING,
    SUB_CATEGORIES_SUCCESS,
    SUB_CATEGORIES_FAIL,
} from '../../interfaces/subCategories';

interface IInitialState {
    loading: boolean;
    subCategories?: TSubCategories;
}

const initialState: IInitialState = {
    loading: true,
};

export const subCategoriesReducer = (
    state: IInitialState = initialState,
    action: SubCategoriesDispatchTypes
) => {
    switch (action.type) {
        case SUB_CATEGORIES_FAIL:
            return {
                ...state,
                loading: false,
            };
        case SUB_CATEGORIES_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SUB_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                subCategories: action.payload,
            };
        default:
            return state;
    }
};
