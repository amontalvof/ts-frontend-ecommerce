import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalCustomStyles } from '../../constants';
import useDisableBodyScroll from '../../hooks/useDisableBodyScroll';
import { closeCommentModal } from '../../redux/actions/commentModalActions';
import { RootStore } from '../../redux/store';
import ModalHeader from '../ModalHeader';
import CommentForm from './commentForm';
import { ModalContent, ModalTitulo } from './styles';

const CommentModal = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootStore) => state);
    const { uiCommentModalReducer, plantillaReducer } = state;
    useDisableBodyScroll(uiCommentModalReducer.modalOpen);
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];

    const closeModal = () => {
        dispatch(closeCommentModal());
    };

    return (
        <Modal
            isOpen={uiCommentModalReducer.modalOpen}
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
                        text="Rate this product"
                        plantillaStyles={plantillaStyles}
                        closeModal={closeModal}
                    />
                    <CommentForm
                        plantillaStyles={plantillaStyles}
                        productId={uiCommentModalReducer.payload}
                    />
                </ModalTitulo>
            </ModalContent>
        </Modal>
    );
};

export default CommentModal;
