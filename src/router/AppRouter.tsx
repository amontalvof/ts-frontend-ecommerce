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
import ProductInfo from '../pages/ProductInfo';
import Products from '../pages/Products';
import Error404 from '../pages/Error404';
import { SpinnerContainer, RouterContainer } from './styles';
import { RootStore } from '../redux/store';
import {
    getCategories,
    getStyles,
    getSubCategories,
    getProductRoutes,
} from '../redux/actions';

const AppRouter = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootStore) => state);

    const {
        plantillaReducer,
        categoriesReducer,
        subCategoriesReducer,
        productsRoutesReducer,
    } = state;
    const { loading: loadingStyles, styles = [] } = plantillaReducer;
    const { loading: loadingCategories } = categoriesReducer;
    const { loading: loadingSubCategories } = subCategoriesReducer;
    const { loading: loadingProductsRoutes } = productsRoutesReducer;

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
        if (!productsRoutesReducer.routes) {
            dispatch(getProductRoutes());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (
        loadingStyles ||
        loadingCategories ||
        loadingSubCategories ||
        loadingProductsRoutes
    ) {
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
        <Router>
            <RouterContainer>
                <Top plantillaStyles={plantillaStyles} />
                <Header />
                <Switch>
                    <Route exact path="/error" component={Error404} />
                    <Route
                        exact
                        path="/:categoryId/:subCategoryId/:productId"
                        component={ProductInfo}
                    />
                    <Route
                        exact
                        path={[
                            '/:categoryId/:subCategoryId',
                            '/products/free',
                            '/products/sales',
                            '/products/views',
                            '/:categoryId',
                        ]}
                        component={Products}
                    />
                    <Route exact path="/" component={Main} />
                    <Redirect to="/error" />
                </Switch>
            </RouterContainer>
        </Router>
    );
};

export default AppRouter;
