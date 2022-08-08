import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { ILoginActionParams } from '../../interfaces/authModal';
import {
    startLogin,
    openAuthModal,
} from '../../redux/actions/authModalActions';
import { TextInput } from '../FormFields/textInput';
import { reCaptchaKey } from '../../constants';
import { loginValidationSchema } from './validation/loginValidation';
import { TStyle } from '../../interfaces/plantilla';
import { RenderIf } from '../RenderIf';
import {
    ForgotPasswordContainer,
    ReCaptchaContainer,
    StyledButton,
    StyledError,
    SubmitButton,
} from './styles';

const Login = ({ plantillaStyles }: { plantillaStyles: TStyle }) => {
    const captcha = useRef(null) as MutableRefObject<any>;
    const [isReCaptchaChecked, setReCaptchaChecked] = useState(false);
    const [showError, setShowError] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isReCaptchaChecked) {
            setShowError(false);
        }
    }, [isReCaptchaChecked]);

    const handleLogin = (values: ILoginActionParams) => {
        if (isReCaptchaChecked) {
            dispatch(startLogin({ ...values }));
        } else {
            setShowError(true);
        }
    };

    const handleCaptchaChange = () => {
        if (captcha.current.getValue()) {
            setReCaptchaChecked(true);
        }
    };

    const handleButtonClick = (value: string) => {
        dispatch(openAuthModal(value));
    };

    return (
        <Formik
            initialValues={{
                logEmail: '',
                logPassword: '',
            }}
            onSubmit={handleLogin}
            validationSchema={loginValidationSchema}
        >
            {() => (
                <Form noValidate>
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
                    <RenderIf isTrue={showError}>
                        <StyledError>
                            Error: You need to check the reCAPTCHA.
                        </StyledError>
                    </RenderIf>
                    <SubmitButton
                        colorfondo={plantillaStyles.colorFondo}
                        colortexto={plantillaStyles.colorTexto}
                        type="submit"
                        className="btn btn-block"
                        value="SUBMIT"
                        style={{ outline: 'none' }}
                    />
                    <ForgotPasswordContainer>
                        <StyledButton
                            color={plantillaStyles.colorFondo}
                            onClick={() => handleButtonClick('forgotPassword')}
                        >
                            Forgot Password
                        </StyledButton>
                    </ForgotPasswordContainer>
                </Form>
            )}
        </Formik>
    );
};

export default Login;
