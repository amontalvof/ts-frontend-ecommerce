import { TCategories } from '../interfaces/categories';
import { TSubCategories } from '../interfaces/subCategories';
import { relevantRoutes } from '../constants';
import filterCategoriesByRoute from './filterCategoriesByRoute';

interface IGetProductsRequestBodyParams {
    categories: TCategories;
    subCategories: TSubCategories;
    categoryId: string;
    subCategoryId: string;
    actualPage: number;
}

interface IGetProductsRequestBodyReturn {
    ordenar?: string;
    modo?: string;
    item?: string | null;
    valor?: number | null;
    base?: number;
    tope?: number;
}

const getProductsRequestBody = ({
    categories,
    subCategories,
    categoryId,
    subCategoryId,
    actualPage,
}: IGetProductsRequestBodyParams): IGetProductsRequestBodyReturn => {
    const page = actualPage || 1;
    const base = (page - 1) * 12;
    if (categoryId === 'products' && relevantRoutes.includes(subCategoryId)) {
        switch (subCategoryId) {
            case 'free':
                return {
                    ordenar: 'id',
                    modo: 'ASC',
                    item: 'precio',
                    valor: 0,
                    base,
                    tope: 12,
                };
            case 'sales':
                return {
                    ordenar: 'ventas',
                    modo: 'DESC',
                    item: null,
                    valor: null,
                    base,
                    tope: 12,
                };
            case 'views':
                return {
                    ordenar: 'vistas',
                    modo: 'DESC',
                    item: null,
                    valor: null,
                    base,
                    tope: 12,
                };
            default:
                return {};
        }
    }
    if (subCategoryId !== '') {
        const subCategory = filterCategoriesByRoute(
            subCategories,
            subCategoryId
        );
        return {
            ordenar: 'id',
            modo: 'ASC',
            item: 'id_subcategoria',
            valor: subCategory?.id,
            base,
            tope: 12,
        };
    }
    const category = filterCategoriesByRoute(categories, categoryId);
    return {
        ordenar: 'id',
        modo: 'ASC',
        item: 'id_categoria',
        valor: category?.id,
        base,
        tope: 12,
    };
};

export default getProductsRequestBody;
