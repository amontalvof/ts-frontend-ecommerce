import { ElementType } from 'react';
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
                    <Route path="/:uid" component={UserProfile} />
                </Switch>
            ) : (
                <Redirect to="/" />
            )}
        </Route>
    );
};
