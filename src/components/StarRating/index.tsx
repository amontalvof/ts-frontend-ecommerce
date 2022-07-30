import { useState } from 'react';
import { StaledFaStar, StyledRatio } from './styles';

interface IColor {
    filled: string;
    unfilled: string;
}

interface IStarRatingProps {
    count?: number;
    rating: number | null;
    color: IColor;
    onRating: React.Dispatch<React.SetStateAction<number | null>>;
}

export const StarRating = ({
    color,
    count = 5,
    rating,
    onRating,
}: IStarRatingProps) => {
    const { filled, unfilled } = color;
    const [hover, setHover] = useState<number | null>(null);
    return (
        <div>
            {[...Array(count)].map((star, index) => {
                const ratingValue = index + 1;
                const starColor =
                    ratingValue <= Number(hover || rating) ? filled : unfilled;
                return (
                    <label key={`star-${ratingValue}`}>
                        <StyledRatio
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => onRating(ratingValue)}
                        />
                        <StaledFaStar
                            size={30}
                            color={starColor}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
};
