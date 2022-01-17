import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { RootStore } from '../../redux/store';
import { checkIsAllowedRoute } from '../../helpers/checkIsAllowedRoute';
import { TSubCategory } from '../../interfaces/subCategories';

const SubCategory = () => {
    const { subCategoryId = '' } = useParams<{ subCategoryId?: string }>();
    const { subCategories = [] } = useSelector(
        (state: RootStore) => state.subCategoriesReducer
    );
    const isAnAllowedRoute = checkIsAllowedRoute<TSubCategory>(
        subCategories,
        subCategoryId
    );

    if (!isAnAllowedRoute) {
        return <Redirect to="/error" />;
    }
    return (
        <div>
            <h1>SubCategory</h1>
        </div>
    );
};

export default SubCategory;
