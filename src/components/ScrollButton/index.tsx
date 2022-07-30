import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { StyledButton } from './styles';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';

export const ScrollButton = () => {
    const [pageScroll, setPageScroll] = useState<number>(0);
    const state = useSelector((state: RootStore) => state);
    const { plantillaReducer } = state;
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];

    const setIt = () => {
        setPageScroll(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', setIt);
        return () => window.removeEventListener('scroll', setIt);
    });

    const scrollBackToTop = () => {
        scroll.scrollToTop();
    };

    const isPageScrollBiggerThan200 = pageScroll > 200;

    return (
        <StyledButton
            onClick={scrollBackToTop}
            isPageScrollBiggerThan200={isPageScrollBiggerThan200}
            colortexto={plantillaStyles?.colorTexto}
            colorfondo={plantillaStyles?.colorFondo}
        >
            <FaAngleDoubleUp />
        </StyledButton>
    );
};
