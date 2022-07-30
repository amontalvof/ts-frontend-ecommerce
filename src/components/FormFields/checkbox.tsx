import { ReactElement } from 'react';
import { ErrorMessage, useField } from 'formik';
import { ErrorText, StyledCheckbox } from './styles';

interface ICheckboxProps {
    label?: ReactElement;
    name: string;
    [x: string]: any;
}

export const Checkbox = ({ label, ...props }: ICheckboxProps) => {
    const [field] = useField({ ...props, type: 'checkbox' });
    return (
        <>
            <label>
                <StyledCheckbox type="checkbox" {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={props.name}>
                {(msg) => (
                    <ErrorText>
                        <strong>ERROR:</strong> {msg}
                    </ErrorText>
                )}
            </ErrorMessage>
        </>
    );
};
