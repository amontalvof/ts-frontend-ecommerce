/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { RootStore } from '../../redux/store';
import { FaReply /*, FaPlus*/ } from 'react-icons/fa';
import { checkIsAllowedRoute } from '../../helpers/checkIsAllowedRoute';
import { TSubCategory } from '../../interfaces/subCategories';
import { TCategory } from '../../interfaces/categories';
import { TRoute } from '../../interfaces/productRoutes';
import { ImagesViewer, ProductFeatures, ProductsPanel } from '../../components';
import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';
import { baseUrl } from '../../constants';
import RenderIf from '../../components/RenderIf';
import VideoViewer from '../../components/VideoViewer';
import TabSet from '../../components/TabSet';
import Comments from '../../components/Comments';
import filterCategoriesByRoute from '../../helpers/filterCategoriesByRoute';
import ThereAreNoProducts from '../../components/ThereAreNoProducts';
import {
    InfoContainer,
    IconContainer,
    StyledSpan,
    StyledAnchor,
    // StyledFacebookIcon,
    // StyledWhatsappIcon,
    SpinnerContainer,
    StyledErrorContainer,
} from './styles';

interface IUseParams {
    categoryId?: string;
    subCategoryId?: string;
    productId?: string;
}

const ProductInfo = () => {
    const [viewRelatedProducts, setViewRelatedProducts] =
        useState<string>('grid');
    const history = useHistory();
    const {
        categoryId = '',
        subCategoryId = '',
        productId = '',
    } = useParams<IUseParams>();

    const {
        subCategoriesReducer,
        categoriesReducer,
        productsRoutesReducer,
        plantillaReducer,
    } = useSelector((state: RootStore) => state);

    const { loading: loadingSubCategories, subCategories = [] } =
        subCategoriesReducer;
    const { loading: loadingCategories, categories = [] } = categoriesReducer;
    const { loading: loadingProductsRoutes, routes = [] } =
        productsRoutesReducer;
    const { loading: loadingStyles, styles = [] } = plantillaReducer;

    const subCategory = filterCategoriesByRoute(subCategories, subCategoryId);

    const {
        loading: loadingRelatedProducts,
        value: valueRelatedProducts = {},
    } = useFetch(`${baseUrl}/products`, {
        body: JSON.stringify({
            ordenar: '',
            modo: 'Rand()',
            item: 'id_subcategoria',
            valor: subCategory?.id,
            base: 0,
            tope: 4,
        }),
        method: 'POST',
    });

    const { products } = valueRelatedProducts;

    const { loading: loadingProduct, value: valueProduct = {} } = useFetch(
        `${baseUrl}/product/${productId}`
    );

    const { product = [] } = valueProduct;
    const isFisico = product[0]?.tipo === 'fisico';
    const hasMultimedia = !!product[0]?.multimedia;
    const infoContainerClass = isFisico
        ? 'col-md-7 col-sm-6 col-xs-12'
        : 'col-sm-6 col-xs-12';

    const plantillaStyles = styles[0];

    const isASubCategoryAllowedRoute = checkIsAllowedRoute<TSubCategory>(
        subCategories,
        subCategoryId
    );
    const isACategoryAllowedRoute = checkIsAllowedRoute<TCategory>(
        categories,
        categoryId
    );
    const isAProductAllowedRoute = checkIsAllowedRoute<TRoute>(
        routes,
        productId
    );

    if (
        !isASubCategoryAllowedRoute ||
        !isACategoryAllowedRoute ||
        !isAProductAllowedRoute
    ) {
        return <Redirect to="/error" />;
    }

    if (
        loadingStyles ||
        loadingCategories ||
        loadingSubCategories ||
        loadingProductsRoutes ||
        loadingProduct ||
        loadingRelatedProducts
    ) {
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
            <div className="container">
                <div className="row">
                    <RenderIf isTrue={isFisico && hasMultimedia}>
                        <div className="col-md-5 col-sm-6 col-xs-12">
                            <ImagesViewer infoProduct={product[0]} />
                        </div>
                    </RenderIf>
                    <RenderIf isTrue={!isFisico && hasMultimedia}>
                        <div className="col-sm-6 col-xs-12">
                            <VideoViewer infoProduct={product[0]} />
                        </div>
                    </RenderIf>
                    <InfoContainer className={infoContainerClass}>
                        <div className="col-xs-6">
                            <h6>
                                <StyledAnchor
                                    className="text-muted"
                                    onClick={() => history.goBack()}
                                    plantillaStyles={plantillaStyles}
                                >
                                    <IconContainer>
                                        <FaReply />
                                        <StyledSpan>Continue Buying</StyledSpan>
                                    </IconContainer>
                                </StyledAnchor>
                            </h6>
                        </div>
                        <div className="col-xs-6">
                            {/* <h6>
                                <StyledAnchor
                                    className="dropdown-toggle pull-right text-muted"
                                    data-toggle="dropdown"
                                    plantillaStyles={plantillaStyles}
                                >
                                    <IconContainer>
                                        <FaPlus />
                                        <StyledSpan>Share</StyledSpan>
                                    </IconContainer>
                                </StyledAnchor>
                                <ul className="dropdown-menu pull-right compartirRedes">
                                    <li>
                                        <StyledAnchor>
                                            <IconContainer>
                                                <StyledFacebookIcon />
                                                <StyledSpan>
                                                    Facebook
                                                </StyledSpan>
                                            </IconContainer>
                                        </StyledAnchor>
                                    </li>
                                    <li>
                                        <StyledAnchor>
                                            <IconContainer>
                                                <StyledWhatsappIcon />
                                                <StyledSpan>
                                                    Whatsapp
                                                </StyledSpan>
                                            </IconContainer>
                                        </StyledAnchor>
                                    </li>
                                </ul>
                            </h6> */}
                        </div>
                        <div className="clearfix" />
                        <ProductFeatures
                            infoProduct={product[0]}
                            plantillaStyles={plantillaStyles}
                        />
                    </InfoContainer>
                </div>
                <TabSet color={plantillaStyles?.colorFondo} />
                <Comments color={plantillaStyles?.colorFondo} />
            </div>
            <RenderIf isTrue={products}>
                <ProductsPanel
                    title="RELATED PRODUCTS"
                    products={products}
                    seeMoreRoute={`/${categoryId}/${subCategoryId}`}
                    viewType={viewRelatedProducts}
                    onChangeViewType={setViewRelatedProducts}
                />
            </RenderIf>
            <RenderIf isTrue={!products}>
                <StyledErrorContainer>
                    <ThereAreNoProducts message="There are no related products." />
                </StyledErrorContainer>
            </RenderIf>
        </div>
    );
};

export default ProductInfo;
