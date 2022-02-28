import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { RootStore } from '../../redux/store';
import { checkIsAllowedRoute } from '../../helpers/checkIsAllowedRoute';
import { TSubCategory } from '../../interfaces/subCategories';
import { TCategory } from '../../interfaces/categories';
import { TRoute } from '../../interfaces/productRoutes';
import { ImagesViewer } from '../../components';

interface IUseParams {
    categoryId?: string;
    subCategoryId?: string;
    productId?: string;
}

const ProductInfo = () => {
    const {
        categoryId = '',
        subCategoryId = '',
        productId = '',
    } = useParams<IUseParams>();
    const { subCategoriesReducer, categoriesReducer, productsRoutesReducer } =
        useSelector((state: RootStore) => state);
    const { subCategories = [] } = subCategoriesReducer;
    const { categories = [] } = categoriesReducer;
    const { routes = [] } = productsRoutesReducer;

    const isASubCategoryAllowedRoute = checkIsAllowedRoute<TSubCategory>(
        subCategories,
        subCategoryId
    );
    const isACategoryAllowedRoute = checkIsAllowedRoute<TCategory>(
        categories,
        categoryId
    );
    const isAProductAllowedRoute = checkIsAllowedRoute<TRoute>(
        routes,
        productId
    );

    if (
        !isASubCategoryAllowedRoute ||
        !isACategoryAllowedRoute ||
        !isAProductAllowedRoute
    ) {
        return <Redirect to="/error" />;
    }

    return (
        <div className="container-fluid infoproducto">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-6 col-xs-12">
                        <ImagesViewer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
