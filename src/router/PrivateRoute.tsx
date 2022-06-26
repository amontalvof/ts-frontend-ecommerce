import { Redirect, Route, Switch } from 'react-router-dom';

interface IPrivateRouteProps {
    isAuthenticated: boolean;
    component: () => JSX.Element;
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
