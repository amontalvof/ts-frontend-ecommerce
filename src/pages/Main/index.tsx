import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '../../components/Slider';
import Spinner from '../../components/Spinner';
import { getSlider } from '../../redux/actions/sliderActions';
import { RootStore } from '../../redux/store';
import './styles.scss';

const Main = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootStore) => state);
    const { sliderReducer, plantillaReducer } = state;
    const { loading: loadingStyles, styles = [] } = plantillaReducer;
    const { loading: loadingSlider, slider = [] } = sliderReducer;
    const plantillaStyles = styles[0];

    useEffect(() => {
        if (!sliderReducer.slider) {
            dispatch(getSlider());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loadingStyles || loadingSlider) {
        return (
            <div id="mainSpinnerContainer">
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
            <div id="SliderContainer">
                <Slider
                    elements={slider}
                    controles
                    // autoplay
                    velocidad="800"
                />
            </div>
        </div>
    );
};

export default Main;
