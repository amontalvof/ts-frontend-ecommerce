import { toast } from 'react-toastify';
import { fetchWithToken } from '../helpers/fetch';

interface ICreateProductCommentParams {
    comment: string;
    productosId: number | null;
    uid: number;
    rating: number;
}

const createProductComment = async ({
    comment,
    productosId,
    uid,
    rating,
}: ICreateProductCommentParams) => {
    try {
        const resp = await fetchWithToken(
            `user/comment/new`,
            { comentario: comment, calificacion: rating, productosId, uid },
            'POST'
        );
        const body = await resp.json();
        if (body.ok) {
            toast.success(body.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            toast.error('Sorry there was an error creating the comment.', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    } catch (error: any) {
        toast.error(error.message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};

export default createProductComment;
