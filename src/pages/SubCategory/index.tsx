import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { RootStore } from '../../redux/store';
import { checkIsAllowedRoute } from '../../helpers/checkIsAllowedRoute';
import { TSubCategory } from '../../interfaces/subCategories';
import { TCategory } from '../../interfaces/categories';

const SubCategory = () => {
    const { categoryId = '', subCategoryId = '' } =
        useParams<{ categoryId?: string; subCategoryId?: string }>();
    const { subCategoriesReducer, categoriesReducer } = useSelector(
        (state: RootStore) => state
    );
    const { subCategories = [] } = subCategoriesReducer;
    const { categories = [] } = categoriesReducer;

    const isASubCategoryAllowedRoute = checkIsAllowedRoute<TSubCategory>(
        subCategories,
        subCategoryId
    );
    const isACategoryAllowedRoute = checkIsAllowedRoute<TCategory>(
        categories,
        categoryId
    );

    if (!isASubCategoryAllowedRoute || !isACategoryAllowedRoute) {
        return <Redirect to="/error" />;
    }

    return (
        <div>
            <h1>SubCategory</h1>
        </div>
    );
};

export default SubCategory;
