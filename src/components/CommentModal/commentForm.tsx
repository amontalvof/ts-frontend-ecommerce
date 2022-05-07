import { Form, Formik } from 'formik';
import TextArea from '../FormFields/textArea';
import { commentValidationSchema } from './validation/commentValidation';
import { SubmitButton } from '../AuthModal/styles';
import { TStyle } from '../../interfaces/plantilla';
import { closeCommentModal } from '../../redux/actions/commentModalActions';
import { useDispatch } from 'react-redux';

interface IHandleSubmitParams {
    comment: string;
}

const CommentForm = ({
    plantillaStyles,
    productId,
}: {
    plantillaStyles: TStyle;
    productId?: number;
}) => {
    const dispatch = useDispatch();

    const handleSubmit = (params: IHandleSubmitParams) => {
        console.log(params);
        dispatch(closeCommentModal());
    };
    console.log({ productId });
    return (
        <Formik
            initialValues={{
                comment:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. In officiis eius unde exercitationem laboriosam ratione deleniti, doloremque porro assumenda. Numquam!',
            }}
            onSubmit={handleSubmit}
            validationSchema={commentValidationSchema}
        >
            {() => (
                <Form noValidate>
                    <TextArea
                        label={
                            <>
                                Your opinion about this product:{' '}
                                <span>
                                    <small>(maximum 300 characterss)</small>
                                </span>
                            </>
                        }
                        className="form-control"
                        rows={5}
                        id="comment"
                        name="comment"
                    />
                    <SubmitButton
                        colorfondo={plantillaStyles.colorFondo}
                        colortexto={plantillaStyles.colorTexto}
                        type="submit"
                        className="btn btn-block"
                        value="SUBMIT"
                        style={{ outline: 'none' }}
                    />
                </Form>
            )}
        </Formik>
    );
};

export default CommentForm;
