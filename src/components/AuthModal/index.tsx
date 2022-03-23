import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import useDisableBodyScroll from '../../hooks/useDisableBodyScroll';
import { closeAuthModal } from '../../redux/actions';
import { RootStore } from '../../redux/store';
import Register from './register';
import { customStyles, ModalContent, StyledAnchor } from './styles';

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

    return (
        <Modal
            isOpen={uiAuthModalReducer.modalOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example modal"
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
            // ariaHideApp={!process.env.NODE_ENV === 'test'}
        >
            <ModalContent>
                <Register
                    plantillaStyles={plantillaStyles}
                    closeModal={closeModal}
                />
                <div className="modal-footer">
                    Do you already have a registered account? |{' '}
                    <strong>
                        <StyledAnchor color={plantillaStyles.colorFondo}>
                            Ingresar
                        </StyledAnchor>
                    </strong>
                </div>
            </ModalContent>
        </Modal>
    );
};

export default AuthModal;
