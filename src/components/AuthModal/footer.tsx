import { useDispatch } from 'react-redux';
import { openAuthModal } from '../../redux/actions';
import { RenderIf } from '../RenderIf';
import { StyledButton } from './styles';

const Footer = ({ colorFondo, type }: { colorFondo: string; type: string }) => {
    const dispatch = useDispatch();
    const handleButtonClick = (value: string) => {
        dispatch(openAuthModal(value));
    };
    return (
        <div className="modal-footer">
            <RenderIf isTrue={type === 'register'}>
                <>
                    Do you already have a registered account? |{' '}
                    <strong>
                        <StyledButton
                            color={colorFondo}
                            onClick={() => handleButtonClick('login')}
                        >
                            Login
                        </StyledButton>
                    </strong>
                </>
            </RenderIf>
            <RenderIf isTrue={type !== 'register'}>
                <>
                    Don't have a registered account? |{' '}
                    <strong>
                        <StyledButton
                            color={colorFondo}
                            onClick={() => handleButtonClick('register')}
                        >
                            Register
                        </StyledButton>
                    </strong>
                </>
            </RenderIf>
        </div>
    );
};

export default Footer;
