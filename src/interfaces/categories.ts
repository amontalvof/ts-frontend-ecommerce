export const CATEGORIES_LOADING = 'CATEGORIES_LOADING';
export const CATEGORIES_FAIL = 'CATEGORIES_FAIL';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';

export type TCategory = {
    id: number;
    categoria: string;
    ruta: string;
    fecha: string;
};

export type TCategories = TCategory[];

export interface CategoriesLoading {
    type: typeof CATEGORIES_LOADING;
}

export interface CategoriesFail {
    type: typeof CATEGORIES_FAIL;
}

export interface CategoriesSuccess {
    type: typeof CATEGORIES_SUCCESS;
    payload: TCategories;
}

export type CategoriesDispatchTypes =
    | CategoriesLoading
    | CategoriesFail
    | CategoriesSuccess;
