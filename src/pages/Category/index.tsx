import { useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { checkIsAllowedRoute } from '../../helpers/checkIsAllowedRoute';
import { TCategory } from '../../interfaces/categories';
import { RootStore } from '../../redux/store';

const Category = () => {
    const { categoryId = '' } = useParams<{ categoryId?: string }>();
    const { categories = [] } = useSelector(
        (state: RootStore) => state.categoriesReducer
    );
    const isAnAllowedRoute = checkIsAllowedRoute<TCategory>(
        categories,
        categoryId
    );

    if (!isAnAllowedRoute) {
        return <Redirect to="/error" />;
    }

    return (
        <div>
            <h1>Category</h1>
        </div>
    );
};

export default Category;
