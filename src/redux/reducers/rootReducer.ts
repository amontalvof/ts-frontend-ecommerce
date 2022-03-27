import { combineReducers } from 'redux';
import { plantillaReducer } from './plantillaReducer';
import { categoriesReducer } from './categoriesReducer';
import { subCategoriesReducer } from './subCategoriesReducer';
import { productsRoutesReducer } from './productsRoutesReducer';
import { searchReducer } from './searchReducer';
import { uiAuthModalReducer } from './uiAuthModalReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
    plantillaReducer,
    categoriesReducer,
    subCategoriesReducer,
    productsRoutesReducer,
    searchReducer,
    uiAuthModalReducer,
    authReducer,
});
