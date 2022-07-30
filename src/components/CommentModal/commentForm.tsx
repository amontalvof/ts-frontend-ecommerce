import { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { TextArea } from '../FormFields/textArea';
import { commentValidationSchema } from './validation/commentValidation';
import { SubmitButton } from '../AuthModal/styles';
import { TStyle } from '../../interfaces/plantilla';
import { closeCommentModal } from '../../redux/actions/commentModalActions';
import { useDispatch, useSelector } from 'react-redux';
import { StarRating } from '../StarRating';
import { yellowStar, grayStar } from '../../constants';
import { RatingContainer, StyledError } from './styles';
import { ICommentPayload } from '../../interfaces/commentModal';
import { RootStore } from '../../redux/store';
import { RenderIf } from '../RenderIf';
import updateProductComment from '../../services/updateProductComment';
import createProductComment from '../../services/createProductComment';

interface IHandleSubmitParams {
    comment: string;
}

interface ICommentFormProps {
    plantillaStyles: TStyle;
    commentInfo: ICommentPayload | null;
}

const CommentForm = ({ plantillaStyles, commentInfo }: ICommentFormProps) => {
    const {
        commentsId,
        productosId = null,
        calificacion = null,
        comentario = '',
    } = commentInfo || {};

    const [rating, setRating] = useState<number | null>(calificacion);
    const [showError, setShowError] = useState<boolean>(false);
    const dispatch = useDispatch();
    const state = useSelector((state: RootStore) => state);
    const { authReducer } = state;
    const { uid } = authReducer;

    useEffect(() => {
        if (rating !== null) {
            setShowError(false);
        }
    }, [rating]);

    const handleSubmit = async (params: IHandleSubmitParams) => {
        // TODO: refactor to refetch comments after updating with react-query
        if (!rating) {
            setShowError(true);
        } else {
            const { comment } = params;
            if (commentsId) {
                await updateProductComment({
                    comment,
                    commentsId,
                    rating,
                });
            } else {
                await createProductComment({
                    comment,
                    uid,
                    productosId,
                    rating,
                });
            }
            dispatch(closeCommentModal());
        }
    };

    return (
        <Formik
            initialValues={{
                comment: comentario,
            }}
            onSubmit={handleSubmit}
            validationSchema={commentValidationSchema}
        >
            {() => (
                <Form noValidate>
                    <RatingContainer>
                        <StarRating
                            color={{ filled: yellowStar, unfilled: grayStar }}
                            rating={rating}
                            onRating={setRating}
                        />
                    </RatingContainer>
                    <TextArea
                        label={
                            <>
                                Your opinion about this product:{' '}
                                <span>
                                    <small>
                                        (optional - maximum 300 characters)
                                    </small>
                                </span>
                            </>
                        }
                        className="form-control"
                        rows={5}
                        id="comment"
                        name="comment"
                    />
                    <RenderIf isTrue={showError}>
                        <StyledError>
                            Error: You need to rate the product.
                        </StyledError>
                    </RenderIf>
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
