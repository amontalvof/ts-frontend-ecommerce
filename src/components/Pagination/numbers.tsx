/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { RenderIf } from '../RenderIf';
import List from './list';

interface INumbersProps {
    colorfondo?: string;
    colortexto?: string;
    route?: string;
    pagesAmount?: number;
    actualPage?: number;
}

const Numbers = ({
    pagesAmount = 0,
    actualPage = 1,
    colorfondo,
    colortexto,
    route,
}: INumbersProps) => {
    const isFirstPage = actualPage === 1;
    const areLastPages = actualPage >= pagesAmount - 3;
    const isFirstHalf =
        !isFirstPage && !areLastPages && actualPage < pagesAmount / 2;
    const isLastHalf =
        !isFirstPage && !areLastPages && actualPage >= pagesAmount / 2;
    return (
        <>
            <RenderIf isTrue={pagesAmount > 4}>
                <>
                    <RenderIf isTrue={isFirstPage}>
                        <>
                            <List
                                colorfondo={colorfondo}
                                colortexto={colortexto}
                                start={1}
                                end={5}
                                route={route}
                            />
                            <RenderIf isTrue={pagesAmount !== 5}>
                                <li className="disabled">
                                    <a style={{ color: colorfondo }}>...</a>
                                </li>
                            </RenderIf>
                            <li>
                                <Link
                                    to={`${route}?page=${pagesAmount}`}
                                    style={{ color: colorfondo }}
                                >
                                    {pagesAmount}
                                </Link>
                            </li>
                        </>
                    </RenderIf>
                    <RenderIf isTrue={isFirstHalf}>
                        <>
                            <List
                                colorfondo={colorfondo}
                                colortexto={colortexto}
                                start={actualPage}
                                end={actualPage + 4}
                                route={route}
                            />
                            <RenderIf isTrue={pagesAmount !== 5}>
                                <li className="disabled">
                                    <a style={{ color: colorfondo }}>...</a>
                                </li>
                            </RenderIf>
                            <li>
                                <Link
                                    to={`${route}?page=${pagesAmount}`}
                                    style={{ color: colorfondo }}
                                >
                                    {pagesAmount}
                                </Link>
                            </li>
                        </>
                    </RenderIf>
                    <RenderIf isTrue={isLastHalf}>
                        <>
                            <li>
                                <Link
                                    to={`${route}?page=1`}
                                    style={{ color: colorfondo }}
                                >
                                    1
                                </Link>
                            </li>
                            <RenderIf isTrue={pagesAmount !== 5}>
                                <li className="disabled">
                                    <a style={{ color: colorfondo }}>...</a>
                                </li>
                            </RenderIf>
                            <List
                                colorfondo={colorfondo}
                                colortexto={colortexto}
                                start={actualPage}
                                end={actualPage + 4}
                                route={route}
                            />
                        </>
                    </RenderIf>
                    <RenderIf isTrue={areLastPages}>
                        <>
                            <li>
                                <Link
                                    to={`${route}?page=1`}
                                    style={{ color: colorfondo }}
                                >
                                    1
                                </Link>
                            </li>
                            <RenderIf isTrue={pagesAmount !== 5}>
                                <li className="disabled">
                                    <a style={{ color: colorfondo }}>...</a>
                                </li>
                            </RenderIf>
                            <List
                                colorfondo={colorfondo}
                                colortexto={colortexto}
                                start={pagesAmount - 3}
                                end={pagesAmount + 1}
                                route={route}
                            />
                        </>
                    </RenderIf>
                </>
            </RenderIf>
            <RenderIf isTrue={pagesAmount <= 4}>
                <List
                    route={route}
                    colorfondo={colorfondo}
                    colortexto={colortexto}
                    start={1}
                    end={pagesAmount + 1}
                />
            </RenderIf>
        </>
    );
};

export default Numbers;
