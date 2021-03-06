import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductsPanel } from '../../components';
import Slider from '../../components/Slider';
import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';
import { RootStore } from '../../redux/store';
import { baseUrl } from '../../constants';
import { SpinnerContainer, SliderContainer } from './styles';

const Main = () => {
    const [viewTypeFree, setViewTypeFree] = useState<string>('grid');
    const [viewTypeViews, setViewTypeViews] = useState<string>('grid');
    const [viewTypeSales, setViewTypeSales] = useState<string>('grid');
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
                viewType={viewTypeFree}
                onChangeViewType={setViewTypeFree}
            />
            <ProductsPanel
                title="BEST SELLER"
                products={valueRelevant?.ventas}
                seeMoreRoute="products/sales"
                viewType={viewTypeSales}
                onChangeViewType={setViewTypeSales}
            />
            <ProductsPanel
                title="MOST VIEWED"
                products={valueRelevant?.vistas}
                seeMoreRoute="products/views"
                viewType={viewTypeViews}
                onChangeViewType={setViewTypeViews}
            />
        </div>
    );
};

export default Main;
