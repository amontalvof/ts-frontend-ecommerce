/* eslint-disable jsx-a11y/anchor-is-valid */
import { useParams } from 'react-router-dom';
import useQueryParams from '../../hooks/useQueryParams';
import { RenderIf } from '../RenderIf';
import Arrows from './arrows';
import Numbers from './numbers';
import { PaginationContainer } from './styles';

interface IPaginationProps {
    colorfondo?: string;
    colortexto?: string;
    total?: number;
}

interface IUseParams {
    categoryId?: string;
    subCategoryId?: string;
}

export const Pagination = ({
    colorfondo,
    colortexto,
    total = 0,
}: IPaginationProps) => {
    const query = useQueryParams();
    const { categoryId = '', subCategoryId = '' } = useParams<IUseParams>();
    const route = subCategoryId
        ? `/${categoryId}/${subCategoryId}`
        : `/${categoryId}`;
    const pagesAmount = Math.ceil(total / 12);
    const actualPage = Number(query.get('page')) || 1;

    return (
        <RenderIf isTrue={!!total}>
            <PaginationContainer>
                <ul className="pagination">
                    <Arrows
                        pagesAmount={pagesAmount}
                        actualPage={actualPage}
                        route={route}
                        colorfondo={colorfondo}
                    >
                        <Numbers
                            route={route}
                            colortexto={colortexto}
                            colorfondo={colorfondo}
                            pagesAmount={pagesAmount}
                            actualPage={actualPage}
                        />
                    </Arrows>
                </ul>
            </PaginationContainer>
        </RenderIf>
    );
};
