import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { fetchWithToken } from '../helpers/fetch';

interface IUpdateProductCommentParams {
    comment: string;
    commentsId: number;
    rating: number;
}

const updateProductComment = async ({
    comment,
    commentsId,
    rating,
}: IUpdateProductCommentParams) => {
    try {
        const resp = await fetchWithToken(
            `user/comment/${commentsId}`,
            { comentario: comment, calificacion: rating },
            'PUT'
        );
        const body = await resp.json();
        if (body.ok) {
            toast.success(body.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            toast.error('Sorry there was an error updating the comment.', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    } catch (error: any) {
        toast.error(error.message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};

const useUpdateProductComment = () => {
    const queryClient = useQueryClient();
    return useMutation(updateProductComment, {
        onSuccess: () => queryClient.invalidateQueries('read-user-orders'),
    });
};

export default useUpdateProductComment;
