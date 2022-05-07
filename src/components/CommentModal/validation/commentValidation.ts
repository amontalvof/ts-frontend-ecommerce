import * as Yup from 'yup';

export const commentValidationSchema = Yup.object({
    comment: Yup.string().max(
        300,
        'The comment must be less than 300 characters.'
    ),
});
