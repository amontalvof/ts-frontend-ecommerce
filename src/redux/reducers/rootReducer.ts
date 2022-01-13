import { combineReducers } from 'redux';
import { plantillaReducer } from './plantillaReducer';
import { categoriesReducer } from './categoriesReducer';

export const rootReducer = combineReducers({
    plantillaReducer,
    categoriesReducer,
});
