import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { modalCustomStyles } from '../../constants';
import { RootStore } from '../../redux/store';
import { closeCardModal } from '../../redux/actions';
import useDisableBodyScroll from '../../hooks/useDisableBodyScroll';
import { useForm } from '../../hooks/useForm';
import {
    InputsContainers,
    ModalContent,
    StyledInput,
    ModalTitulo,
    SecondSection,
    StyledButton,
} from './styles';
import { ModalHeader } from '../ModalHeader';

type Focused = 'name' | 'number' | 'expiry' | 'cvc';

export const CardModal = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootStore) => state);
    const { uiCardModalReducer, plantillaReducer } = state;
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];
    useDisableBodyScroll(uiCardModalReducer.modalOpen);
    const [focus, setFocus] = useState<Focused>();
    const [formValues, handleInputChange] = useForm({
        cvc: '',
        expiry: '',
        name: '',
        number: '',
    });
    const { cvc, expiry, name, number } = formValues;

    const closeModal = () => {
        dispatch(closeCardModal());
    };

    const buttonStyles = {
        backgroundColor: plantillaStyles.colorFondo,
        color: plantillaStyles.colorTexto,
        outline: 'none',
    };

    return (
        <Modal
            isOpen={uiCardModalReducer.modalOpen}
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
                        text="Payment"
                        plantillaStyles={plantillaStyles}
                        closeModal={closeModal}
                    />
                    <br />
                    <Cards
                        cvc={cvc}
                        expiry={expiry}
                        focused={focus}
                        name={name}
                        number={number}
                    />
                    <br />
                    <InputsContainers>
                        <StyledInput
                            type="tel"
                            name="number"
                            placeholder="Card Number"
                            value={number}
                            onChange={handleInputChange}
                            onFocus={(e) => setFocus(e.target.name as Focused)}
                            style={{ outline: 'none' }}
                        />
                        <StyledInput
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={name}
                            onChange={handleInputChange}
                            onFocus={(e) => setFocus(e.target.name as Focused)}
                            style={{ outline: 'none' }}
                        />
                        <SecondSection>
                            <StyledInput
                                type="text"
                                name="expiry"
                                placeholder="MM/YY Expiry"
                                value={expiry}
                                onChange={handleInputChange}
                                onFocus={(e) =>
                                    setFocus(e.target.name as Focused)
                                }
                                style={{
                                    outline: 'none',
                                    width: '50%',
                                    marginRight: '5px',
                                }}
                            />
                            <StyledInput
                                type="tel"
                                name="cvc"
                                placeholder="CVC"
                                value={cvc}
                                onChange={handleInputChange}
                                onFocus={(e) =>
                                    setFocus(e.target.name as Focused)
                                }
                                style={{
                                    outline: 'none',
                                    width: '50%',
                                    marginLeft: '5px',
                                }}
                            />
                        </SecondSection>
                    </InputsContainers>
                </ModalTitulo>
                <StyledButton
                    className="btn btn-default btn-block btn-lg"
                    style={buttonStyles}
                >
                    Pay
                </StyledButton>
            </ModalContent>
        </Modal>
    );
};
