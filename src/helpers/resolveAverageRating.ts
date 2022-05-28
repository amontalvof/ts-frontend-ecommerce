import { IComment } from '../interfaces/comment';

const resolveAverageRating = (array: IComment[]): number => {
    const len = array.length;
    const sum = array.reduce((acc: number, val: IComment) => {
        return acc + val.calificacion;
    }, 0);
    return sum / len;
};

export default resolveAverageRating;
