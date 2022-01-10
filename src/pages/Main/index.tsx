import { useDispatch, useSelector } from 'react-redux';
import Top from '../../layout/Top';
import Header from '../../layout/Header';
import { RootStore } from '../../redux/store';
import { useEffect } from 'react';
import { getStyles } from '../../redux/actions/plantillaActions';
import Spinner from '../../components/Spinner';
import './styles.scss';

const Main = () => {
    const dispatch = useDispatch();
    const { loading, styles } = useSelector(
        (state: RootStore) => state.plantillaReducer
    );
    console.log(styles);
    useEffect(() => {
        dispatch(getStyles());
    }, [dispatch]);

    if (loading) {
        return (
            <div id="spinnerContainer">
                <Spinner />
            </div>
        );
    }

    return (
        <div>
            <Top />
            <Header />
        </div>
    );
};

export default Main;
