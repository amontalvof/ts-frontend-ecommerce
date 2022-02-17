/* eslint-disable jsx-a11y/anchor-is-valid */
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

interface INumbersProps {
    colorfondo?: string;
    route?: string;
    pagesAmount?: number;
}

const Numbers = ({ pagesAmount = 0, colorfondo, route }: INumbersProps) => {
    return (
        <>
            {[...Array(pagesAmount)].map((x, i) => {
                const number = i + 1;
                return (
                    <li key={nanoid(10)}>
                        <Link
                            to={`${route}?page=${number}`}
                            style={{ color: colorfondo }}
                        >
                            {number}
                        </Link>
                    </li>
                );
            })}
        </>
    );
};

export default Numbers;
