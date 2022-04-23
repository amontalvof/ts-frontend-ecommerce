import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { IRegisterActionParams } from '../../interfaces/authModal';
import { TStyle } from '../../interfaces/plantilla';
import { startRegister } from '../../redux/actions';
import Checkbox from '../FormFields/checkbox';
import TextInput from '../FormFields/textInput';
import { StyledAnchor, SubmitButton } from './styles';
import { registerValidationSchema } from './validation/registerValidation';

const Register = ({ plantillaStyles }: { plantillaStyles: TStyle }) => {
    const dispatch = useDispatch();

    const handleRegister = (values: IRegisterActionParams) => {
        dispatch(startRegister({ ...values }));
    };

    return (
        // TODO: remove initialValues
        <Formik
            initialValues={{
                regName: 'Andy',
                regEmail: 'amontalvof92@gmail.com', // andy@mail.com
                regPassword1: 'P@ssw0rd', // Aa@123456
                regPassword2: 'P@ssw0rd',
                regTerms: true,
            }}
            onSubmit={handleRegister}
            validationSchema={registerValidationSchema}
        >
            {() => (
                <Form noValidate>
                    <div>
                        <hr />
                        <TextInput
                            type="text"
                            className="form-control text-uppercase"
                            name="regName"
                            placeholder="Full Name"
                            required
                        />
                        <TextInput
                            type="email"
                            className="form-control"
                            name="regEmail"
                            placeholder="EMAIL"
                            required
                        />
                        <TextInput
                            type="password"
                            className="form-control text-uppercase"
                            name="regPassword1"
                            placeholder="Password"
                            required
                        />
                        <TextInput
                            type="password"
                            className="form-control text-uppercase"
                            name="regPassword2"
                            placeholder="Confirm Password"
                            required
                        />
                        <div>
                            <Checkbox
                                name="regTerms"
                                colorfondo={plantillaStyles.colorFondo}
                                label={
                                    <small style={{ marginLeft: '5px' }}>
                                        By registering, you agree to our terms
                                        of use and privacy policies.{' '}
                                        {/* TODO: change the link of terms of use
                                            and privacy policies*/}
                                        <StyledAnchor
                                            href="//www.iubenda.com/privacy-policy/8146355"
                                            title="Terms of use and privacy policies"
                                            target="_blank"
                                            rel="noreferrer"
                                            color={plantillaStyles.colorFondo}
                                        >
                                            Read more
                                        </StyledAnchor>
                                    </small>
                                }
                            />
                        </div>
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

export default Register;
