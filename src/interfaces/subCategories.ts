export const SUB_CATEGORIES_LOADING = 'SUB_CATEGORIES_LOADING';
export const SUB_CATEGORIES_FAIL = 'SUB_CATEGORIES_FAIL';
export const SUB_CATEGORIES_SUCCESS = 'SUB_CATEGORIES_SUCCESS';

export type TSubCategory = {
    id: number;
    subcategoria: string;
    id_categoria: number;
    ruta: string;
    fecha: string;
};

export type TSubCategories = TSubCategory[];

export interface SubCategoriesLoading {
    type: typeof SUB_CATEGORIES_LOADING;
}

export interface SubCategoriesFail {
    type: typeof SUB_CATEGORIES_FAIL;
}

export interface SubCategoriesSuccess {
    type: typeof SUB_CATEGORIES_SUCCESS;
    payload: TSubCategories;
}

export type SubCategoriesDispatchTypes =
    | SubCategoriesLoading
    | SubCategoriesFail
    | SubCategoriesSuccess;
