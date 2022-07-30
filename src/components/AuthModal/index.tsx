import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import useDisableBodyScroll from '../../hooks/useDisableBodyScroll';
import { closeAuthModal } from '../../redux/actions';
import { RootStore } from '../../redux/store';
import { RenderIf } from '../RenderIf';
import Footer from './footer';
import ForgotPassword from './forgotPassword';
import GoogleSignInButton from './googleSignInButton';
import { ModalHeader } from '../ModalHeader';
import Login from './login';
import Register from './register';
import { ModalContent, ModalTitulo } from './styles';
import { modalCustomStyles } from '../../constants';

Modal.setAppElement('#root');

const headerTextMap: { [key: string]: string } = {
    register: 'Register',
    login: 'Login',
    forgotPassword: 'Forgot Password',
};

export const AuthModal = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootStore) => state);
    const { uiAuthModalReducer, plantillaReducer } = state;
    useDisableBodyScroll(uiAuthModalReducer.modalOpen);
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];

    const closeModal = () => {
        dispatch(closeAuthModal());
    };

    const type = uiAuthModalReducer?.payload;
    const headerText = headerTextMap[type];

    return (
        <Modal
            isOpen={uiAuthModalReducer.modalOpen}
            onRequestClose={closeModal}
            style={modalCustomStyles}
            contentLabel="Example modal"
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <ModalContent>
                <ModalTitulo className="modal-body">
                    <ModalHeader
                        text={headerText}
                        plantillaStyles={plantillaStyles}
                        closeModal={closeModal}
                    />
                    <RenderIf isTrue={type !== 'forgotPassword'}>
                        <GoogleSignInButton text={headerText} />
                    </RenderIf>
                    <RenderIf isTrue={type === 'register'}>
                        <Register plantillaStyles={plantillaStyles} />
                    </RenderIf>
                    <RenderIf isTrue={type === 'login'}>
                        <Login plantillaStyles={plantillaStyles} />
                    </RenderIf>
                    <RenderIf isTrue={type === 'forgotPassword'}>
                        <ForgotPassword plantillaStyles={plantillaStyles} />
                    </RenderIf>
                </ModalTitulo>
                <Footer colorFondo={plantillaStyles.colorFondo} type={type} />
            </ModalContent>
        </Modal>
    );
};
