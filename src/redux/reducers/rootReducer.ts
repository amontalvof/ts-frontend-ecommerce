import { combineReducers } from 'redux';
import { plantillaReducer } from './plantillaReducer';
import { categoriesReducer } from './categoriesReducer';
import { subCategoriesReducer } from './subCategoriesReducer';
import { productsRoutesReducer } from './productsRoutesReducer';
import { searchReducer } from './searchReducer';
import { authModalReducer } from './authModalReducer';

export const rootReducer = combineReducers({
    plantillaReducer,
    categoriesReducer,
    subCategoriesReducer,
    productsRoutesReducer,
    searchReducer,
    authModalReducer,
});
