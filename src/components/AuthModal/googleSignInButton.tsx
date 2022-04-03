import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { startGoogleSignIn } from '../../redux/actions/authModalActions';
import { GoogleLoginContainer } from './styles';

const GoogleSignInButton = ({ text }: { text: string }) => {
    const dispatch = useDispatch();

    const responseGoogle = (response: any) => {
        dispatch(startGoogleSignIn({ ...response, type: text.toLowerCase() }));
    };

    const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';

    return (
        <GoogleLoginContainer>
            <GoogleLogin
                clientId={googleClientId}
                buttonText={`${text} with Google`}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        </GoogleLoginContainer>
    );
};

export default GoogleSignInButton;
