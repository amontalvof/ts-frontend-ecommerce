import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
    logEmail: Yup.string()
        .required('An email is required.')
        .email('The email has an invalid format.'),
    logPassword: Yup.string()
        .required('A password is required.')
        .min(8, 'The password must be 8 characters or more')
        .max(20, 'The password must be 20 characters or less.')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
            'The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
        ),
});
