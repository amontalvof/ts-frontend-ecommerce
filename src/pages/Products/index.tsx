import { useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { RootStore } from '../../redux/store';
import { checkIsAllowedRoute } from '../../helpers/checkIsAllowedRoute';
import { TSubCategory } from '../../interfaces/subCategories';
import { TCategory } from '../../interfaces/categories';
import checkProductsRoute from '../../helpers/checkProductsRoute';
import getProductsRequestBody from '../../helpers/getProductsRequestBody';
import useFetch from '../../hooks/useFetch';
import Spinner from '../../components/Spinner';
import { SpinnerContainer } from './styles';
import Banner from '../../components/Banner';
import ProductsPanel from '../../components/ProductsPanel';
import Pagination from '../../components/Pagination';
import useQueryParams from '../../hooks/useQueryParams';

interface IUseParams {
    categoryId?: string;
    subCategoryId?: string;
}

const baseUrl = process.env.REACT_APP_API_URL;

const Products = () => {
    const { categoryId = '', subCategoryId = '' } = useParams<IUseParams>();
    const query = useQueryParams();
    const { subCategoriesReducer, categoriesReducer, plantillaReducer } =
        useSelector((state: RootStore) => state);
    const { loading: loadingStyles, styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];
    const { subCategories = [] } = subCategoriesReducer;
    const { categories = [] } = categoriesReducer;

    const actualPage = query.get('page');

    const requestBody = getProductsRequestBody({
        categories,
        subCategories,
        categoryId,
        subCategoryId,
        actualPage: Number(actualPage),
    });

    const { loading: loadingProducts, value: valueProducts = {} } = useFetch(
        `${baseUrl}/products`,
        {
            body: JSON.stringify(requestBody),
            method: 'POST',
        },
        [categoryId, subCategoryId, actualPage]
    );

    const { products, total } = valueProducts;

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

    const isOnlyProductsRoute =
        `/${categoryId}/${subCategoryId}` === '/products/';

    if (
        checkProductsRoute({
            subCategoryId,
            isASubCategoryAllowedRoute,
            isACategoryAllowedRoute,
        }) ||
        isOnlyProductsRoute
    ) {
        return <Redirect to="/error" />;
    }

    if (loadingStyles || loadingProducts) {
        return (
            <SpinnerContainer>
                <Spinner
                    plantillaStyles={plantillaStyles}
                    size={15}
                    margin={2}
                    defaultColor="#47bac1"
                    text={
                        <h1
                            style={{
                                color: plantillaStyles?.colorFondo || '#47bac1',
                            }}
                        >
                            Loading...
                        </h1>
                    }
                />
            </SpinnerContainer>
        );
    }

    return (
        <div>
            <Banner />
            <ProductsPanel
                products={products}
                displayOrderDropdown
                displayBreadcrumb
            />
            <Pagination
                colorfondo={plantillaStyles?.colorFondo}
                colortexto={plantillaStyles?.colorTexto}
                total={total}
            />
        </div>
    );
};

export default Products;
