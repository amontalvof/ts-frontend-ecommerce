import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import range from 'lodash.range';
import useQueryParams from '../../hooks/useQueryParams';

interface IListProps {
    colorfondo?: string;
    colortexto?: string;
    route?: string;
    start?: number;
    end?: number;
}

const List = ({
    start = 1,
    end = 1,
    route,
    colorfondo,
    colortexto,
}: IListProps) => {
    const query = useQueryParams();
    const actualPage = Number(query.get('page')) || 1;
    const activeStyles = {
        backgroundColor: colorfondo,
        borderColor: colorfondo,
        color: colortexto,
    };
    const defaultStyles = { color: colorfondo };
    return (
        <>
            {range(start, end).map((number) => {
                return (
                    <li key={nanoid(10)}>
                        <Link
                            to={`${route}?page=${number}`}
                            style={
                                actualPage === number
                                    ? activeStyles
                                    : defaultStyles
                            }
                        >
                            {number}
                        </Link>
                    </li>
                );
            })}
        </>
    );
};

export default List;
