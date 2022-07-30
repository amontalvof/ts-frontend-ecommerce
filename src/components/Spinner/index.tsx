import { ReactElement } from 'react';
import { GridLoader } from 'react-spinners';
import { TStyle } from '../../interfaces/plantilla';

interface ISpinnerProps {
    plantillaStyles?: TStyle;
    size: number;
    margin: number;
    defaultColor: string;
    text?: ReactElement;
}

export const Spinner = ({
    plantillaStyles,
    size,
    margin,
    defaultColor,
    text,
}: ISpinnerProps) => {
    const colorFondo = plantillaStyles?.colorFondo || defaultColor;
    return (
        <>
            <GridLoader size={size} margin={margin} color={colorFondo} />
            {text}
        </>
    );
};
