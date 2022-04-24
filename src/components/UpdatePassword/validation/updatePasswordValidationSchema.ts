import * as Yup from 'yup';

export const updatePasswordValidationSchema = Yup.object({
    updPassword1: Yup.string()
        .required('A new password is required.')
        .min(8, 'The password must be 8 characters or more')
        .max(20, 'The password must be 20 characters or less.')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
            'The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
        ),
    updPassword2: Yup.string()
        .required('A confirmation password is required.')
        .oneOf([Yup.ref('updPassword1')], "The passwords don't match"),
});
