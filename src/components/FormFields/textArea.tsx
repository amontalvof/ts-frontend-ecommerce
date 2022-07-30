import { ErrorMessage, useField } from 'formik';
import { ErrorText, StyledTextArea } from './styles';
import { ReactElement } from 'react';

interface ITextAreaProps {
    name: string;
    label?: ReactElement;
    placeholder?: string;
    [x: string]: any;
}

export const TextArea = (props: ITextAreaProps) => {
    const { id, label } = props;
    const [field] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={id} className="text-muted">
                {label}
            </label>
            <StyledTextArea {...field} {...props} id={id} />
            <ErrorMessage name={props.name}>
                {(msg) => (
                    <ErrorText>
                        <strong>ERROR:</strong> {msg}
                    </ErrorText>
                )}
            </ErrorMessage>
        </div>
    );
};
