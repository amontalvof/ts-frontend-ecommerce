import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../../components/Products';
import Slider from '../../components/Slider';
import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';
import { getSlider } from '../../redux/actions/sliderActions';
import { RootStore } from '../../redux/store';
import { SpinnerContainer, SliderContainer } from './styles';

const baseUrl = process.env.REACT_APP_API_URL;

const Main = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootStore) => state);
    const { sliderReducer, plantillaReducer } = state;
    const { loading: loadingStyles, styles = [] } = plantillaReducer;
    const { loading: loadingSlider, slider = [] } = sliderReducer;
    const plantillaStyles = styles[0];

    const { loading: loadingProducts, value } = useFetch(
        `${baseUrl}/products/relevant`
    );

    useEffect(() => {
        if (!sliderReducer.slider) {
            dispatch(getSlider());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loadingStyles || loadingSlider || loadingProducts) {
        return (
            <SpinnerContainer>
                <Spinner
                    plantillaStyles={plantillaStyles}
                    size={15}
                    margin={2}
                    defaultColor="#47bac1"
                    text={
                        <h1
                            style={{
                                color: plantillaStyles?.colorFondo || '#47bac1',
                            }}
                        >
                            Loading...
                        </h1>
                    }
                />
            </SpinnerContainer>
        );
    }

    return (
        <div>
            <SliderContainer>
                <Slider
                    elements={slider}
                    controles
                    // autoplay
                    velocidad="800"
                />
            </SliderContainer>
            <Products
                title="FREE PRODUCTS"
                products={value?.free}
                seeMoreRoute="products/free"
            />
            <Products
                title="MOST SELLED PRODUCTS"
                products={value?.ventas}
                seeMoreRoute="products/sales"
            />
            <Products
                title="MOST VIEWED PRODUCTS"
                products={value?.vistas}
                seeMoreRoute="products/views"
            />
        </div>
    );
};

export default Main;
