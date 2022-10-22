import { combineReducers } from 'redux';
import { plantillaReducer } from './plantillaReducer';
import { categoriesReducer } from './categoriesReducer';
import { subCategoriesReducer } from './subCategoriesReducer';
import { productsRoutesReducer } from './productsRoutesReducer';
import { searchReducer } from './searchReducer';
import { uiAuthModalReducer } from './uiAuthModalReducer';
import { uiCommentModalReducer } from './uiCommentModalReducer';
import { authReducer } from './authReducer';
import { uiCardModalReducer } from './uiCardModalReducer';

export const rootReducer = combineReducers({
    plantillaReducer,
    categoriesReducer,
    subCategoriesReducer,
    productsRoutesReducer,
    searchReducer,
    uiCommentModalReducer,
    uiAuthModalReducer,
    uiCardModalReducer,
    authReducer,
});
