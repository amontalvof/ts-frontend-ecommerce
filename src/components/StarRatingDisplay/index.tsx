import { StyledFaStar } from './styles';

interface IColor {
    filled: string;
    unfilled: string;
}

interface IStarRatingDisplayProps {
    count?: number;
    calificacion?: number;
    color: IColor;
}

export const StarRatingDisplay = (props: IStarRatingDisplayProps) => {
    const { calificacion = 0, count = 5, color } = props;
    const { filled, unfilled } = color;
    const newCalificacion = Math.floor(calificacion);

    return (
        <>
            {[...Array(count)].map((star, index) => {
                const ratingValue = index + 1;
                const starColor =
                    ratingValue <= newCalificacion ? filled : unfilled;
                return (
                    <StyledFaStar
                        color={starColor}
                        key={`star-display-${ratingValue}`}
                    />
                );
            })}
        </>
    );
};
