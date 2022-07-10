import { Redirect, Route, Switch } from 'react-router-dom';
import Cart from '../pages/Cart';
import Error404 from '../pages/Error404';
import Main from '../pages/Main';
import ProductInfo from '../pages/ProductInfo';
import Products from '../pages/Products';
import Verify from '../pages/Verify';

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
                <Route path="/cart" component={Cart} />
                <Route exact path="/error" component={Error404} />
                <Route exact path="/verify/:hash" component={Verify} />
                <Route
                    exact
                    path="/:categoryId/:subCategoryId/:productId"
                    component={ProductInfo}
                />
                <Route
                    exact
                    path={['/:categoryId/:subCategoryId', '/:categoryId']}
                    component={Products}
                />
                <Route exact path="/" component={Main} />
                <Redirect to="/error" />
            </Switch>
        </Route>
    );
};
