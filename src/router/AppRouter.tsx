import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import Spinner from '../components/Spinner';
import Header from '../layout/Header';
import Top from '../layout/Top';
import Main from '../pages/Main';
import Category from '../pages/Category';
import SubCategory from '../pages/SubCategory';
import { getCategories, getStyles, getSubCategories } from '../redux/actions';
import { RootStore } from '../redux/store';
import Error404 from '../pages/Error404';
import { SpinnerContainer, RouterContainer } from './styles';

const AppRouter = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootStore) => state);

    const { plantillaReducer, categoriesReducer, subCategoriesReducer } = state;
    const { loading: loadingStyles, styles = [] } = plantillaReducer;
    const { loading: loadingCategories } = categoriesReducer;
    const { loading: loadingSubCategories } = subCategoriesReducer;

    const plantillaStyles = styles[0];

    const favicon = document.getElementById('favicon') as HTMLAnchorElement;
    favicon.href = plantillaStyles?.icono || './favicon.ico';

    useEffect(() => {
        if (!plantillaReducer.styles) {
            dispatch(getStyles());
        }
        if (!categoriesReducer.categories) {
            dispatch(getCategories());
        }
        if (!subCategoriesReducer.subCategories) {
            dispatch(getSubCategories());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loadingStyles || loadingCategories || loadingSubCategories) {
        return (
            <SpinnerContainer>
                <Spinner
                    plantillaStyles={plantillaStyles}
                    size={15}
                    margin={2}
                    defaultColor="#47bac1"
                    text={<h1 style={{ color: '#47bac1' }}>Loading...</h1>}
                />
            </SpinnerContainer>
        );
    }

    return (
        <Router>
            <RouterContainer>
                <Top plantillaStyles={plantillaStyles} />
                <Header />
                <Switch>
                    <Route exact path="/error" component={Error404} />
                    <Route
                        exact
                        path="/:categoryId/:subCategoryId"
                        component={SubCategory}
                    />
                    <Route exact path="/:categoryId" component={Category} />
                    <Route exact path="/" component={Main} />
                    <Redirect to="/error" />
                </Switch>
            </RouterContainer>
        </Router>
    );
};

export default AppRouter;
