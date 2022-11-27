import { Redirect, Route, Switch } from 'react-router-dom';
import {
    LazyCart,
    LazyError404,
    LazyMain,
    LazyProductInfo,
    LazyProducts,
    LazyVerify,
} from '../pages';

interface IPublicRouteProps {
    isAuthenticated: boolean;
    exact?: boolean;
    path: string;
}

export const PublicRoute = ({
    isAuthenticated,
    ...rest
}: IPublicRouteProps) => {
    return (
        <Route {...rest}>
            <Switch>
                <Route path="/cart" component={LazyCart} />
                <Route exact path="/error" component={LazyError404} />
                <Route exact path="/verify/:hash" component={LazyVerify} />
                <Route
                    exact
                    path="/:categoryId/:subCategoryId/:productId"
                    component={LazyProductInfo}
                />
                <Route
                    exact
                    path={['/:categoryId/:subCategoryId', '/:categoryId']}
                    component={LazyProducts}
                />
                <Route exact path="/" component={LazyMain} />
                <Redirect to="/error" />
            </Switch>
        </Route>
    );
};
