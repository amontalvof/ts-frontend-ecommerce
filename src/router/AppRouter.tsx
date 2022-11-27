import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { omit } from 'lodash';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Spinner, ScrollButton } from '../components';
import Header from '../layout/Header';
import Top from '../layout/Top';
import { SpinnerContainer, RouterContainer } from './styles';
import { RootStore } from '../redux/store';
import {
    getCategories,
    getStyles,
    getSubCategories,
    getProductRoutes,
} from '../redux/actions';
import { startChecking } from '../redux/actions/authModalActions';
import { IUserInfo } from '../interfaces/user';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { defaultBrand } from '../constants';
import { LazyUserProfile } from '../pages';

const AppRouter = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootStore) => state);

    const {
        plantillaReducer,
        categoriesReducer,
        subCategoriesReducer,
        productsRoutesReducer,
        authReducer,
    } = state;
    const { loading: loadingStyles, styles = [] } = plantillaReducer;
    const { loading: loadingCategories } = categoriesReducer;
    const { loading: loadingSubCategories } = subCategoriesReducer;
    const { loading: loadingProductsRoutes } = productsRoutesReducer;
    const { checking, uid } = authReducer;
    const userInfo = omit<IUserInfo>(authReducer, 'checking');
    const plantillaStyles = styles[0];

    const favicon = document.getElementById('favicon') as HTMLAnchorElement;
    favicon.href = plantillaStyles?.icono || './favicon.ico';

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

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
        loadingProductsRoutes ||
        checking
    ) {
        return (
            <SpinnerContainer>
                <Spinner
                    plantillaStyles={plantillaStyles}
                    size={15}
                    margin={2}
                    defaultColor={defaultBrand}
                    text={
                        <h1
                            style={{
                                color:
                                    plantillaStyles?.colorFondo || defaultBrand,
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
        <Suspense fallback={null}>
            <Router>
                <RouterContainer>
                    <Top
                        plantillaStyles={plantillaStyles}
                        userInfo={userInfo}
                    />
                    <Header />
                    <Switch>
                        <PrivateRoute
                            path="/profile"
                            isAuthenticated={!!uid}
                            component={LazyUserProfile}
                        />
                        <PublicRoute path="/" isAuthenticated={!!uid} />
                    </Switch>
                    <ScrollButton />
                </RouterContainer>
            </Router>
        </Suspense>
    );
};

export default AppRouter;
