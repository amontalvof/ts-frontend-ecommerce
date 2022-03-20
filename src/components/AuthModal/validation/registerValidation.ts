import * as Yup from 'yup';

export const registerValidationSchema = Yup.object({
    regName: Yup.string()
        .required('A full name is required.')
        .min(3, 'The full name must be 3 characters or more.')
        .max(20, 'The full name must be 20 characters or less.')
        .matches(
            /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/,
            'The full name does not allow numbers or special characters.'
        ),
    regEmail: Yup.string()
        .required('An email is required.')
        .email('The email has an invalid format.'),
    regPassword1: Yup.string()
        .required('A password is required.')
        .min(8, 'The password must be 8 characters or more')
        .max(20, 'The password must be 20 characters or less.')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
            'The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
        ),
    regPassword2: Yup.string()
        .required('A confirmation password is required.')
        .oneOf([Yup.ref('password1')], 'The passwords are not equal.'),
    regTerms: Yup.boolean().oneOf(
        [true],
        'You must accept the terms of use and privacy policies.'
    ),
});
