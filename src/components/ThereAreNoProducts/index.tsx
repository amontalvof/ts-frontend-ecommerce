import { ErrorContainer } from './styles';

const ThereAreNoProducts = ({ message }: { message: string }) => {
    return (
        <ErrorContainer className="col-12-xs text-center">
            <h1>
                <small>¡Oops!</small>
            </h1>
            <h2>{message}</h2>
        </ErrorContainer>
    );
};

export default ThereAreNoProducts;
