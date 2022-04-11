import { Redirect, Route, Switch } from 'react-router-dom';
import UserProfile from '../pages/UserProfile';

interface IPrivateRouteProps {
    isAuthenticated: boolean;
    exact?: boolean;
    path: string;
}

export const PrivateRoute = ({
    isAuthenticated,
    ...rest
}: IPrivateRouteProps) => {
    return (
        <Route {...rest}>
            {isAuthenticated ? (
                <Switch>
                    <Route path="/profile" component={UserProfile} />
                    <Redirect to="/" />
                </Switch>
            ) : (
                <Redirect to="/" />
            )}
        </Route>
    );
};
