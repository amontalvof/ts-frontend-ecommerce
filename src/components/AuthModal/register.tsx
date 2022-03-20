import { Form, Formik } from 'formik';
import { TStyle } from '../../interfaces/plantilla';
import Checkbox from './fields/checkbox';
import TextInput from './fields/textInput';
import {
    ModalTitulo,
    StyledAnchor,
    SubmitButton,
    Title,
    XCloseButton,
} from './styles';
import { registerValidationSchema } from './validation/registerValidation';

interface IRegisterProps {
    plantillaStyles: TStyle;
    closeModal: () => void;
}

const Register = ({ plantillaStyles, closeModal }: IRegisterProps) => {
    return (
        <Formik
            initialValues={{
                regName: '',
                regEmail: '',
                regPassword1: '',
                password2: '',
                regTerms: false,
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={registerValidationSchema}
        >
            {() => (
                <Form noValidate>
                    <ModalTitulo className="modal-body">
                        <Title
                            colorfondo={plantillaStyles.colorFondo}
                            colortexto={plantillaStyles.colorTexto}
                        >
                            Register
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
                            <TextInput
                                type="text"
                                className="form-control text-uppercase"
                                name="regName"
                                placeholder="Full Name"
                                required
                            />
                            <TextInput
                                type="email"
                                className="form-control text-uppercase"
                                name="regEmail"
                                placeholder="Email"
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
                                            By registering, you agree to our
                                            terms of use and privacy policies.{' '}
                                            {/* TODO: change the link of terms of use
                                            and privacy policies*/}
                                            <StyledAnchor
                                                href="//www.iubenda.com/privacy-policy/8146355"
                                                title="Terms of use and privacy policies"
                                                target="_blank"
                                                rel="noreferrer"
                                                color={
                                                    plantillaStyles.colorFondo
                                                }
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
                    </ModalTitulo>
                </Form>
            )}
        </Formik>
    );
};

export default Register;
