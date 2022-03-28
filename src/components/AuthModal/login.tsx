import { MutableRefObject, useRef, useState } from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { ILoginActionParams } from '../../interfaces/authModal';
import { TStyle } from '../../interfaces/plantilla';
import { startLogin } from '../../redux/actions/authModalActions';
import TextInput from './fields/textInput';
import { reCaptchaKey } from '../../constants';
import {
    ModalTitulo,
    ReCaptchaContainer,
    SubmitButton,
    Title,
    XCloseButton,
} from './styles';
import { loginValidationSchema } from './validation/loginValidation';

interface ILoginProps {
    plantillaStyles: TStyle;
    closeModal: () => void;
}

const Login = ({ plantillaStyles, closeModal }: ILoginProps) => {
    const captcha = useRef(null) as MutableRefObject<any>;
    const [isReCaptchaChecked, setReCaptchaChecked] = useState(false);
    const dispatch = useDispatch();

    const handleLogin = (values: ILoginActionParams) => {
        isReCaptchaChecked && dispatch(startLogin({ ...values }));
        // dispatch(startLogin({ ...values }));
    };

    const handleCaptchaChange = () => {
        if (captcha.current.getValue()) {
            setReCaptchaChecked(true);
        }
    };

    // TODO: remove initialValues
    return (
        <Formik
            initialValues={{
                logEmail: 'amontalvof92@gmail.com', // andy@mail.com
                logPassword: 'P@ssw0rd', // Aa@123456
            }}
            onSubmit={handleLogin}
            validationSchema={loginValidationSchema}
        >
            {() => (
                <Form noValidate>
                    <ModalTitulo className="modal-body">
                        <Title
                            colorfondo={plantillaStyles.colorFondo}
                            colortexto={plantillaStyles.colorTexto}
                        >
                            Login
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
                                type="email"
                                className="form-control"
                                name="logEmail"
                                placeholder="EMAIL"
                                required
                            />
                            <TextInput
                                type="password"
                                className="form-control text-uppercase"
                                name="logPassword"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <ReCaptchaContainer>
                            <ReCAPTCHA
                                ref={captcha}
                                sitekey={reCaptchaKey || ''}
                                onChange={handleCaptchaChange}
                            />
                        </ReCaptchaContainer>
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

export default Login;
