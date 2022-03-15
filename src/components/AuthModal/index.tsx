import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { closeAuthModal } from '../../redux/actions';
import { RootStore } from '../../redux/store';
import {
    customStyles,
    ModalContent,
    ModalTitulo,
    Title,
    XCloseButton,
} from './styles';

Modal.setAppElement('#root');

const AuthModal = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootStore) => state);
    const { authModalReducer, plantillaReducer } = state;

    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];

    console.log(authModalReducer, plantillaStyles);

    const closeModal = () => {
        dispatch(closeAuthModal());
    };

    return (
        <Modal
            isOpen={authModalReducer.modalOpen}
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
                <form>
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
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="glyphicon glyphicon-user" />
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control text-uppercase"
                                        id="regUsuario"
                                        name="regUsuario"
                                        placeholder="Full Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="glyphicon glyphicon-envelope" />
                                    </span>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="regEmail"
                                        name="regEmail"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="glyphicon glyphicon-lock" />
                                    </span>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="regPassword"
                                        name="regPassword"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="checkBox">
                                <label>
                                    <input id="regPoliticas" type="checkbox" />
                                    <small>
                                        Al registrarse, usted acepta nuestras
                                        condiciones de uso y políticas de
                                        privacidad
                                        <br />
                                        <a
                                            href="//www.iubenda.com/privacy-policy/8146355"
                                            className="iubenda-white iubenda-embed"
                                            title="condiciones de uso y políticas de privacidad"
                                        >
                                            Leer más
                                        </a>
                                    </small>
                                </label>
                            </div>
                        </div>
                    </ModalTitulo>
                    <div className="modal-footer">
                        <input
                            type="submit"
                            className="btn btn-default backColor btn-block"
                            value="ENVIAR"
                        />
                    </div>
                </form>
            </ModalContent>
        </Modal>
    );
};

export default AuthModal;
