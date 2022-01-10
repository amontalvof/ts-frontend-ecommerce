import { GridLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <>
            <GridLoader size={15} margin={2} color="#47bac1" />
            <h1>Loading...</h1>
        </>
    );
};

export default Spinner;
