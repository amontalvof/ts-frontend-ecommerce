import { useDispatch, useSelector } from 'react-redux';
import Top from '../../layout/Top';
import Header from '../../layout/Header';
import { RootStore } from '../../redux/store';
import { useEffect } from 'react';
import {
    getStyles,
    getCategories,
    getSubCategories,
} from '../../redux/actions';
import Spinner from '../../components/Spinner';
import './styles.scss';

const Main = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootStore) => state);

    const { plantillaReducer, categoriesReducer, subCategoriesReducer } = state;
    const { loading: loadingStyles, styles = [] } = plantillaReducer;
    const { loading: loadingCategories } = categoriesReducer;
    const { loading: loadingSubCategories } = subCategoriesReducer;

    const plantillaStyles = styles[0];

    const favicon = document.getElementById('favicon') as HTMLAnchorElement;
    favicon.href = plantillaStyles?.icono || './favicon.ico';

    useEffect(() => {
        dispatch(getStyles());
        dispatch(getCategories());
        dispatch(getSubCategories());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loadingStyles || loadingCategories || loadingSubCategories) {
        return (
            <div id="spinnerContainer">
                <Spinner
                    plantillaStyles={plantillaStyles}
                    size={15}
                    margin={2}
                    defaultColor="#47bac1"
                    text={<h1>Loading...</h1>}
                />
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
