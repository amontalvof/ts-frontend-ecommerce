import { useSelector } from 'react-redux';
import ProductsPanel from '../../components/ProductsPanel';
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

    const { loading: loadingRelevantProducts, value: valueRelevant } = useFetch(
        `${baseUrl}/products/relevant`
    );

    if (loadingStyles || loadingSlider || loadingRelevantProducts) {
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
            <ProductsPanel
                title="FREE PRODUCTS"
                products={valueRelevant?.free}
                seeMoreRoute="products/free"
            />
            <ProductsPanel
                title="BEST SELLER"
                products={valueRelevant?.ventas}
                seeMoreRoute="products/sales"
            />
            <ProductsPanel
                title="MOST VIEWED"
                products={valueRelevant?.vistas}
                seeMoreRoute="products/views"
            />
        </div>
    );
};

export default Main;
