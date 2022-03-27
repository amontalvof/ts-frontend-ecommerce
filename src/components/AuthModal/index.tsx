import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import useDisableBodyScroll from '../../hooks/useDisableBodyScroll';
import { closeAuthModal } from '../../redux/actions';
import { RootStore } from '../../redux/store';
import RenderIf from '../RenderIf';
import Footer from './footer';
import Login from './login';
import Register from './register';
import { customStyles, ModalContent } from './styles';

Modal.setAppElement('#root');

const AuthModal = () => {
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

    return (
        <Modal
            isOpen={uiAuthModalReducer.modalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example modal"
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <ModalContent>
                <RenderIf isTrue={type === 'register'}>
                    <Register
                        plantillaStyles={plantillaStyles}
                        closeModal={closeModal}
                    />
                </RenderIf>
                <RenderIf isTrue={type === 'login'}>
                    <Login
                        plantillaStyles={plantillaStyles}
                        closeModal={closeModal}
                    />
                </RenderIf>
                <Footer colorFondo={plantillaStyles.colorFondo} type={type} />
            </ModalContent>
        </Modal>
    );
};

export default AuthModal;
