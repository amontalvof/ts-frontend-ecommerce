/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import RenderIf from '../RenderIf';
import Numbers from './numbers';
import { PaginationContainer, IconContainer } from './styles';

interface IPaginationProps {
    colorfondo?: string;
    total?: number;
}

interface IUseParams {
    categoryId?: string;
    subCategoryId?: string;
}

const Pagination = ({ colorfondo, total = 0 }: IPaginationProps) => {
    const { categoryId = '', subCategoryId = '' } = useParams<IUseParams>();
    const route = subCategoryId
        ? `/${categoryId}/${subCategoryId}`
        : `/${categoryId}`;
    const pagesAmount = Math.ceil(total / 12);
    return (
        <RenderIf isTrue={!!total}>
            <PaginationContainer>
                <ul className="pagination">
                    <RenderIf isTrue={pagesAmount > 4}>
                        <>
                            <li>
                                <Link to="" style={{ color: colorfondo }}>
                                    <IconContainer>
                                        <FaAngleLeft />
                                    </IconContainer>
                                </Link>
                            </li>
                            <Numbers
                                colorfondo={colorfondo}
                                pagesAmount={4}
                                route={route}
                            />
                            <li className="disabled">
                                <a style={{ color: colorfondo }}>...</a>
                            </li>
                            <li>
                                <Link
                                    to={`${route}?page=${pagesAmount}`}
                                    style={{ color: colorfondo }}
                                >
                                    {pagesAmount}
                                </Link>
                            </li>
                            <li>
                                <Link to="" style={{ color: colorfondo }}>
                                    <IconContainer>
                                        <FaAngleRight />
                                    </IconContainer>
                                </Link>
                            </li>
                        </>
                    </RenderIf>
                    <RenderIf isTrue={pagesAmount <= 4}>
                        <Numbers
                            route={route}
                            colorfondo={colorfondo}
                            pagesAmount={pagesAmount}
                        />
                    </RenderIf>
                </ul>
            </PaginationContainer>
        </RenderIf>
    );
};

export default Pagination;
