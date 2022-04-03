import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { TStyle } from '../../interfaces/plantilla';
import { startForgotPassword } from '../../redux/actions/authModalActions';
import TextInput from './fields/textInput';
import { SubmitButton } from './styles';
import { forgotPasswordValidationSchema } from './validation/forgotPasswordValidation';

const ForgotPassword = ({ plantillaStyles }: { plantillaStyles: TStyle }) => {
    const dispatch = useDispatch();

    const handleForgotPasswordSubmit = (values: { fgpEmail: string }) => {
        dispatch(startForgotPassword({ ...values }));
    };

    return (
        <Formik
            initialValues={{
                fgpEmail: 'amontalvof92@gmail.com',
            }}
            onSubmit={handleForgotPasswordSubmit}
            validationSchema={forgotPasswordValidationSchema}
        >
            {() => (
                <Form noValidate>
                    <div>
                        <hr />
                        <label className="text-muted">
                            Write the email with which you are registered, and
                            we will send you a new password:
                        </label>
                        <TextInput
                            type="email"
                            className="form-control"
                            name="fgpEmail"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <SubmitButton
                        colorfondo={plantillaStyles.colorFondo}
                        colortexto={plantillaStyles.colorTexto}
                        type="submit"
                        className="btn btn-block"
                        value="SUBMIT"
                        style={{ outline: 'none' }}
                    />
                </Form>
            )}
        </Formik>
    );
};

export default ForgotPassword;
