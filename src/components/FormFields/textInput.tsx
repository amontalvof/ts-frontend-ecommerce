import { ErrorMessage, useField } from 'formik';
import { ErrorText } from './styles';

interface IMyTextInputProps {
    name: string;
    type: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
}

const iconMap = {
    text: 'glyphicon-user',
    email: 'glyphicon-envelope',
    password: 'glyphicon-lock',
};

export const TextInput = (props: IMyTextInputProps) => {
    const { type } = props;
    const [field] = useField(props);
    return (
        <div className="form-group">
            <div className="input-group" style={{ marginBottom: '3px' }}>
                <span className="input-group-addon">
                    <i className={`glyphicon ${iconMap[type]}`} />
                </span>
                <input {...field} {...props} />
            </div>
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
