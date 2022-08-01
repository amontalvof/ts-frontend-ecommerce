import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductsPanel, Slider, Spinner } from '../../components';
import { RootStore } from '../../redux/store';
import { defaultBrand } from '../../constants';
import { SpinnerContainer, SliderContainer } from './styles';
import useReadSlider from '../../hooks/useReadSlider';
import useReadRelevantProducts from '../../hooks/useReadRelevantProducts';

const Main = () => {
    const [viewTypeFree, setViewTypeFree] = useState<string>('grid');
    const [viewTypeViews, setViewTypeViews] = useState<string>('grid');
    const [viewTypeSales, setViewTypeSales] = useState<string>('grid');
    const state = useSelector((state: RootStore) => state);
    const { plantillaReducer } = state;
    const { loading: loadingStyles, styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];

    const { isLoading: loadingSlider, data: valueSlider } =
        useReadSlider('slider');

    const { isLoading: loadingRelevantProducts, data: valueRelevant } =
        useReadRelevantProducts('products/relevant');

    if (loadingStyles || loadingSlider || loadingRelevantProducts) {
        return (
            <SpinnerContainer>
                <Spinner
                    plantillaStyles={plantillaStyles}
                    size={15}
                    margin={2}
                    defaultColor={defaultBrand}
                    text={
                        <h1
                            style={{
                                color:
                                    plantillaStyles?.colorFondo || defaultBrand,
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
                    autoplay
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
