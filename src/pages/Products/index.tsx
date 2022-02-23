import { useState, useMemo } from 'react';
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
import { Banner, ProductsPanel, Pagination } from '../../components';
import useQueryParams from '../../hooks/useQueryParams';
import { resolveRandomBanner } from '../../helpers/resolveRandomBanner';

interface IUseParams {
    categoryId?: string;
    subCategoryId?: string;
}

const baseUrl = process.env.REACT_APP_API_URL;

const Products = () => {
    const [viewType, setViewType] = useState<string>('grid');
    const [sortDirection, setSortDirection] = useState<string>('DESC');
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
        sortDirection,
    });

    const { loading: loadingProducts, value: valueProducts = {} } = useFetch(
        `${baseUrl}/products`,
        {
            body: JSON.stringify(requestBody),
            method: 'POST',
        },
        [categoryId, subCategoryId, actualPage, sortDirection]
    );

    const { loading: loadingBanner, value: valueBanner = {} } = useFetch(
        `${baseUrl}/banner`
    );
    const { banners = [] } = valueBanner;
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

    const bannerIndex = useMemo(() => resolveRandomBanner(1, 4), []);
    const newBanner = banners.find((item: any) => item.id === bannerIndex);

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

    if (loadingStyles || loadingProducts || loadingBanner) {
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
            <Banner banner={newBanner} />
            <ProductsPanel
                products={products}
                viewType={viewType}
                onChangeViewType={setViewType}
                displaySortDropdown
                sortDirection={sortDirection}
                onSort={setSortDirection}
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
