import { useState } from 'react';
import Modal from 'react-modal';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { modalCustomStyles } from '../../constants';
import { RootStore } from '../../redux/store';
import { closeCardModal } from '../../redux/actions';
import useDisableBodyScroll from '../../hooks/useDisableBodyScroll';
import {
    InputsContainers,
    ModalContent,
    StyledInput,
    ModalTitulo,
    SecondSection,
    StyledButton,
    ErrorText,
} from './styles';
import { ModalHeader } from '../ModalHeader';
import { cardValidationSchema } from './validation/cardValidation';

type Focused = 'name' | 'number' | 'expiry' | 'cvc';

export const CardModal = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootStore) => state);
    const { uiCardModalReducer, plantillaReducer } = state;
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];
    useDisableBodyScroll(uiCardModalReducer.modalOpen);
    const [focus, setFocus] = useState<Focused>();

    const handleSubmit = (values: any) => {
        console.log(JSON.stringify(values, null, 2));
    };

    const formik = useFormik({
        initialValues: {
            cvc: '',
            expiry: '',
            name: '',
            number: '',
        },
        onSubmit: handleSubmit,
        validationSchema: cardValidationSchema,
    });

    const closeModal = () => {
        formik.resetForm();
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
                <form onSubmit={formik.handleSubmit}>
                    <ModalTitulo className="modal-body">
                        <ModalHeader
                            text="Payment"
                            plantillaStyles={plantillaStyles}
                            closeModal={closeModal}
                        />
                        <br />
                        <Cards
                            cvc={formik.values.cvc}
                            expiry={formik.values.expiry}
                            focused={focus}
                            name={formik.values.name}
                            number={formik.values.number}
                        />
                        <br />
                        <InputsContainers>
                            <StyledInput
                                type="tel"
                                name="number"
                                placeholder="Card Number"
                                onChange={formik.handleChange}
                                value={formik.values.number}
                                onFocus={(e) =>
                                    setFocus(e.target.name as Focused)
                                }
                                style={{ outline: 'none' }}
                            />
                            {formik.touched.number && formik.errors.number && (
                                <ErrorText>
                                    <strong>ERROR:</strong>{' '}
                                    {formik.errors.number}
                                </ErrorText>
                            )}
                            <StyledInput
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                onFocus={(e) =>
                                    setFocus(e.target.name as Focused)
                                }
                                style={{ outline: 'none' }}
                            />
                            {formik.touched.name && formik.errors.name && (
                                <ErrorText>
                                    <strong>ERROR:</strong> {formik.errors.name}
                                </ErrorText>
                            )}
                            <SecondSection>
                                <StyledInput
                                    type="text"
                                    name="expiry"
                                    placeholder="MM/YY Expiry"
                                    onChange={formik.handleChange}
                                    value={formik.values.expiry}
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
                                    onChange={formik.handleChange}
                                    value={formik.values.cvc}
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
                            {formik.touched.expiry && formik.errors.expiry && (
                                <ErrorText>
                                    <strong>ERROR:</strong>{' '}
                                    {formik.errors.expiry}
                                </ErrorText>
                            )}
                            {formik.touched.cvc && formik.errors.cvc && (
                                <ErrorText>
                                    <strong>ERROR:</strong> {formik.errors.cvc}
                                </ErrorText>
                            )}
                        </InputsContainers>
                    </ModalTitulo>
                    <StyledButton
                        className="btn btn-default btn-block btn-lg"
                        style={buttonStyles}
                        type="submit"
                    >
                        Pay
                    </StyledButton>
                </form>
            </ModalContent>
        </Modal>
    );
};
