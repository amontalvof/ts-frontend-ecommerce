import { useSelector } from 'react-redux';
import Products from '../../components/Products';
import Slider from '../../components/Slider';
import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';
import { RootStore } from '../../redux/store';
import { SpinnerContainer, SliderContainer } from './styles';

const baseUrl = process.env.REACT_APP_API_URL;

const Main = () => {
    const state = useSelector((state: RootStore) => state);
    const { plantillaReducer } = state;
    const { loading: loadingStyles, styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];

    const { loading: loadingSlider, value: valueSlider } = useFetch(
        `${baseUrl}/slider`
    );

    const { loading: loadingProducts, value: valueRelevant } = useFetch(
        `${baseUrl}/products/relevant`
    );

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
                    elements={valueSlider?.slider}
                    controles
                    // autoplay
                    velocidad="800"
                />
            </SliderContainer>
            <Products
                title="FREE PRODUCTS"
                products={valueRelevant?.free}
                seeMoreRoute="products/free"
            />
            <Products
                title="BEST SELLER"
                products={valueRelevant?.ventas}
                seeMoreRoute="products/sales"
            />
            <Products
                title="MOST VIEWED"
                products={valueRelevant?.vistas}
                seeMoreRoute="products/views"
            />
        </div>
    );
};

export default Main;
