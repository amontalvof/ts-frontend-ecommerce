import { ErrorContainer } from './styles';

const Error404 = () => {
    return (
        <div className="container">
            <div className="row">
                <ErrorContainer className="col-12-xs text-center">
                    <h1>404</h1>
                    <h2>Oops! Page not found</h2>
                </ErrorContainer>
            </div>
        </div>
    );
};

export default Error404;
