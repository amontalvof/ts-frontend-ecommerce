import { GridLoader } from 'react-spinners';
import { TStyle } from '../../interfaces/plantilla';

interface ISpinnerProps {
    plantillaStyles?: TStyle;
}

const Spinner = ({ plantillaStyles }: ISpinnerProps) => {
    const colorFondo = plantillaStyles?.colorFondo || '#47bac1';
    return (
        <>
            <GridLoader size={15} margin={2} color={colorFondo} />
            <h1>Loading...</h1>
        </>
    );
};

export default Spinner;
