import { useDispatch, useSelector } from 'react-redux';
import Top from '../../layout/Top';
import Header from '../../layout/Header';
import { RootStore } from '../../redux/store';
import { useEffect } from 'react';
import { getStyles, getCategories } from '../../redux/actions';
import Spinner from '../../components/Spinner';
import './styles.scss';

const Main = () => {
    const dispatch = useDispatch();
    const { plantillaReducer, categoriesReducer } = useSelector(
        (state: RootStore) => state
    );
    const { loading: loadingStyles, styles = [] } = plantillaReducer;
    const { loading: loadingCategories } = categoriesReducer;

    const plantillaStyles = styles[0];

    const favicon = document.getElementById('favicon') as HTMLAnchorElement;
    favicon.href = plantillaStyles?.icono || './favicon.ico';

    useEffect(() => {
        dispatch(getStyles());
        dispatch(getCategories());
    }, [dispatch]);

    if (loadingStyles && loadingCategories) {
        return (
            <div id="spinnerContainer">
                <Spinner plantillaStyles={plantillaStyles} />
            </div>
        );
    }

    return (
        <div>
            <Top plantillaStyles={plantillaStyles} />
            <Header />
        </div>
    );
};

export default Main;
