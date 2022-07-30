// import { MutableRefObject, useRef, useState } from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
// import ReCAPTCHA from 'react-google-recaptcha';
import { ILoginActionParams } from '../../interfaces/authModal';
import {
    startLogin,
    openAuthModal,
} from '../../redux/actions/authModalActions';
import { TextInput } from '../FormFields/textInput';
// import { reCaptchaKey } from '../../constants';
import {
    ForgotPasswordContainer,
    ReCaptchaContainer,
    StyledButton,
    SubmitButton,
} from './styles';
import { loginValidationSchema } from './validation/loginValidation';
import { TStyle } from '../../interfaces/plantilla';

const Login = ({ plantillaStyles }: { plantillaStyles: TStyle }) => {
    // const captcha = useRef(null) as MutableRefObject<any>;
    // const [isReCaptchaChecked, setReCaptchaChecked] = useState(false);
    const dispatch = useDispatch();

    const handleLogin = (values: ILoginActionParams) => {
        // TODO: Activate recaptcha
        // isReCaptchaChecked && dispatch(startLogin({ ...values }));
        dispatch(startLogin({ ...values }));
    };

    // const handleCaptchaChange = () => {
    //     if (captcha.current.getValue()) {
    //         setReCaptchaChecked(true);
    //     }
    // };

    const handleButtonClick = (value: string) => {
        dispatch(openAuthModal(value));
    };

    // TODO: remove initialValues
    return (
        <Formik
            initialValues={{
                logEmail: 'amontalvof92@gmail.com', //test1@mail.com andy@mail.com
                logPassword: 'P@ssw0rd', //           P@ssw0rd2      Aa@123456
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
                        {/* <ReCAPTCHA
                            ref={captcha}
                            sitekey={reCaptchaKey || ''}
                            onChange={handleCaptchaChange}
                        /> */}
                    </ReCaptchaContainer>
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
