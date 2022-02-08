import { useSelector } from 'react-redux';
import { useLocation, useParams, Redirect } from 'react-router-dom';
import { RootStore } from '../../redux/store';
import { checkIsAllowedRoute } from '../../helpers/checkIsAllowedRoute';
import { TSubCategory } from '../../interfaces/subCategories';
import { TCategory } from '../../interfaces/categories';
import checkProductsRoute from '../../helpers/checkProductsRoute';

interface IUseParams {
    categoryId?: string;
    subCategoryId?: string;
}

const Products = () => {
    const { categoryId = '', subCategoryId = '' } = useParams<IUseParams>();
    const { pathname } = useLocation();
    const { subCategoriesReducer, categoriesReducer } = useSelector(
        (state: RootStore) => state
    );
    const { subCategories = [] } = subCategoriesReducer;
    const { categories = [] } = categoriesReducer;

    const isASubCategoryAllowedRoute = checkIsAllowedRoute<TSubCategory>(
        [
            { ruta: 'free' } as TSubCategory,
            { ruta: 'views' } as TSubCategory,
            { ruta: 'sales' } as TSubCategory,
            ...subCategories,
        ],
        subCategoryId
    );
    const isACategoryAllowedRoute = checkIsAllowedRoute<TCategory>(
        [{ ruta: 'products' } as TCategory, ...categories],
        categoryId
    );

    const pathNameLastPosition = pathname.split('/').at(-1);

    if (
        checkProductsRoute({
            subCategoryId,
            isASubCategoryAllowedRoute,
            isACategoryAllowedRoute,
        })
    ) {
        return <Redirect to="/error" />;
    }

    return (
        <div>
            <h1>Products {pathNameLastPosition}</h1>
        </div>
    );
};

export default Products;
