import { ErrorContainer } from './styles';

const ThereAreNoProducts = () => {
    return (
        <ErrorContainer className="col-12-xs text-center">
            <h1>
                <small>¡Oops!</small>
            </h1>
            <h2>There are no products in this section yet.</h2>
        </ErrorContainer>
    );
};

export default ThereAreNoProducts;
