import * as Yup from 'yup';

export const forgotPasswordValidationSchema = Yup.object({
    fgpEmail: Yup.string()
        .required('An email is required.')
        .email('The email has an invalid format.'),
});
