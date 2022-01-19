import { combineReducers } from 'redux';
import { plantillaReducer } from './plantillaReducer';
import { categoriesReducer } from './categoriesReducer';
import { subCategoriesReducer } from './subCategoriesReducer';
import { sliderReducer } from './sliderReducer';

export const rootReducer = combineReducers({
    plantillaReducer,
    categoriesReducer,
    subCategoriesReducer,
    sliderReducer,
});
