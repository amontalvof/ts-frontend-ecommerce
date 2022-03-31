import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { startForgotPassword } from '../../redux/actions/authModalActions';
import TextInput from './fields/textInput';
import { IAuthProps } from './interface';
import { ModalTitulo, SubmitButton, Title, XCloseButton } from './styles';
import { forgotPasswordValidationSchema } from './validation/forgotPasswordValidation';

const ForgotPassword = ({ plantillaStyles, closeModal }: IAuthProps) => {
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
                    <ModalTitulo className="modal-body">
                        <Title
                            colorfondo={plantillaStyles.colorFondo}
                            colortexto={plantillaStyles.colorTexto}
                        >
                            Forgot Password
                        </Title>
                        <XCloseButton
                            onClick={closeModal}
                            type="button"
                            colortexto={plantillaStyles.colorTexto}
                        >
                            X
                        </XCloseButton>
                        <div>
                            <hr />
                            <label className="text-muted">
                                Write the email with which you are registered,
                                and we will send you a new password:
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
                    </ModalTitulo>
                </Form>
            )}
        </Formik>
    );
};

export default ForgotPassword;
