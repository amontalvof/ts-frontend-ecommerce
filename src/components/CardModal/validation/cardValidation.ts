import * as Yup from 'yup';
import valid from 'card-validator';

export const cardValidationSchema = Yup.object({
    number: Yup.string()
        .required('A card number is required.')
        .test(
            'test-number', // this is used internally by yup
            'Credit Card number is invalid', //validation message
            (value) => valid.number(value).isValid
        ),
    name: Yup.string()
        .required('A name is required.')
        .test(
            'test-name', // this is used internally by yup,
            'Name is invalid', //validation message
            (value) => valid.cardholderName(value).isValid
        ),
    expiry: Yup.string()
        .required('An expiry date is required.')
        .test(
            'test-expiry', // this is used internally by yup,
            'Expiry date is invalid', //validation message
            (value) => valid.expirationDate(value).isValid
        ),
    cvc: Yup.string()
        .required('A CVC is required.')
        .test(
            'test-cvc', // this is used internally by yup,
            'CVC is invalid', //validation message
            (value) => valid.cvv(value).isValid
        ),
});
