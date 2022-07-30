import { Dispatch, SetStateAction, useEffect } from 'react';
import MaleUserAvatar from '../../assets/maleUserAvatar';
import { StarRatingDisplay } from '../StarRatingDisplay';
import { baseUrl, grayStar, yellowStar } from '../../constants';
import useFetch from '../../hooks/useFetch';
import { RenderIf } from '../RenderIf/index';
import resolveAverageRating from '../../helpers/resolveAverageRating';
import {
    CommentContainer,
    HeaderInfoContainer,
    ImageContainer,
    ErrorContainer,
} from './styles';
import { IComment } from '../../interfaces/comment';

interface ICommentsProps {
    handleTotalRatings: Dispatch<SetStateAction<number>>;
    handleAverageRating: Dispatch<SetStateAction<number>>;
    color?: string;
    productId?: number;
}

export const Comments = ({
    color,
    productId,
    handleTotalRatings,
    handleAverageRating,
}: ICommentsProps) => {
    const { loading: loadingComments, value: valueComments } = useFetch(
        `${baseUrl}/product/comments/${productId}`
    );

    const { comments } = valueComments || {};

    useEffect(() => {
        if (comments) {
            handleTotalRatings(comments.length || 0);
            handleAverageRating(resolveAverageRating(comments));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadingComments]);

    return (
        <CommentContainer>
            <RenderIf isTrue={!!comments?.length}>
                <>
                    {comments?.map((comment: IComment) => (
                        <div
                            key={comment.id}
                            className="panel-group col-md-3 col-sm-6 col-xs-12"
                            style={{ marginTop: '10px' }}
                        >
                            <div className="panel panel-default">
                                <HeaderInfoContainer className="panel-heading text-uppercase">
                                    <span>{comment.nombre}</span>
                                    <ImageContainer>
                                        <RenderIf isTrue={!!comment.foto}>
                                            <img
                                                width="50"
                                                className="img-circle"
                                                src={comment.foto}
                                                alt="user"
                                            />
                                        </RenderIf>
                                        <RenderIf isTrue={!comment.foto}>
                                            <MaleUserAvatar
                                                color={color}
                                                width="50"
                                                height="50"
                                            />
                                        </RenderIf>
                                    </ImageContainer>
                                </HeaderInfoContainer>
                                <div className="panel-body">
                                    <small>{comment.comentario}</small>
                                </div>
                                <div className="panel-footer">
                                    <StarRatingDisplay
                                        calificacion={Math.floor(
                                            comment.calificacion
                                        )}
                                        color={{
                                            filled: yellowStar,
                                            unfilled: grayStar,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            </RenderIf>
            <RenderIf isTrue={!comments?.length}>
                <ErrorContainer className="col-12-xs text-center">
                    <h2>This product has no comments.</h2>
                </ErrorContainer>
            </RenderIf>
        </CommentContainer>
    );
};
