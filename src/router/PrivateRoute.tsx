import { LazyExoticComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

type JSXcomponent = () => JSX.Element;

interface IPrivateRouteProps {
    isAuthenticated: boolean;
    component: LazyExoticComponent<JSXcomponent> | JSXcomponent;
    exact?: boolean;
    path: string;
}

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}: IPrivateRouteProps) => {
    return (
        <Route {...rest}>
            {isAuthenticated ? (
                <Switch>
                    <Route path="/" component={Component} />
                </Switch>
            ) : (
                <Redirect to="/" />
            )}
        </Route>
    );
};
