import { ReactChild, ReactChildren } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import RenderIf from '../RenderIf';
import { IconContainer } from './styles';

interface IArrowsProps {
    route: string;
    actualPage: number;
    pagesAmount: number;
    colorfondo?: string;
    children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const Arrows = ({
    route,
    actualPage,
    pagesAmount,
    colorfondo,
    children,
}: IArrowsProps) => {
    const nextPage = actualPage + 1;
    const previousPage = actualPage - 1;
    const showLeftArrow = actualPage !== 1 && pagesAmount > 4;
    const showRigthArrow = actualPage < pagesAmount - 3 && pagesAmount > 4;
    return (
        <>
            <RenderIf isTrue={showLeftArrow}>
                <li>
                    <Link
                        to={`${route}?page=${previousPage}`}
                        style={{ color: colorfondo }}
                    >
                        <IconContainer>
                            <FaAngleLeft />
                        </IconContainer>
                    </Link>
                </li>
            </RenderIf>
            {children}
            <RenderIf isTrue={showRigthArrow}>
                <li>
                    <Link
                        to={`${route}?page=${nextPage}`}
                        style={{ color: colorfondo }}
                    >
                        <IconContainer>
                            <FaAngleRight />
                        </IconContainer>
                    </Link>
                </li>
            </RenderIf>
        </>
    );
};

export default Arrows;
