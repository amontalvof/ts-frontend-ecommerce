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
import { defaultBrand, grayStar, yellowStar } from '../../constants';
import filterCategoriesByRoute from '../../helpers/filterCategoriesByRoute';
import useMediaQuery from '../../hooks/useMediaQuery';
import {
    ImagesViewer,
    ProductFeatures,
    ProductsPanel,
    Spinner,
    RenderIf,
    VideoViewer,
    ThereAreNoProducts,
    StarRatingDisplay,
    TabSet,
    Comments,
} from '../../components';
import {
    InfoContainer,
    IconContainer,
    StyledSpan,
    StyledAnchor,
    // StyledFacebookIcon,
    // StyledWhatsappIcon,
    Divider,
    StarIconsContainer,
    SpinnerContainer,
    StyledErrorContainer,
} from './styles';
import useReadRelatedProducts from '../../hooks/useReadRelatedProducts';
import useReadProduct from '../../hooks/useReadProduct';

interface IUseParams {
    categoryId?: string;
    subCategoryId?: string;
    productId?: string;
}

const tabTitles = ['Comments'];

const ProductInfo = () => {
    const [averageRating, setAverageRating] = useState(0);
    const [totalRatings, setTotalRatings] = useState(0);
    const isLarge = useMediaQuery('(min-width: 767px)');
    const [viewRelatedProducts, setViewRelatedProducts] =
        useState<string>('grid');
    const [tabIndex, setTabIndex] = useState(0);
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
    const { isLoading: loadingRelatedProducts, data: valueRelatedProducts } =
        useReadRelatedProducts('products', {
            ordenar: '',
            modo: 'Rand()',
            item: 'id_subcategoria',
            valor: subCategory?.id,
            base: 0,
            tope: 4,
        });

    const { products } = valueRelatedProducts || {};

    const { isLoading: loadingProduct, data: valueProduct = {} } =
        useReadProduct(`product/${productId}`);

    const { product = [] } = valueProduct;
    const isFisico = product[0]?.tipo === 'fisico';
    const infoContainerClass = isFisico
        ? 'col-md-7 col-sm-6 col-xs-12'
        : 'col-sm-6 col-xs-12';

    const plantillaStyles = styles[0];

    const tabPanels = [
        <Comments
            color={plantillaStyles?.colorFondo}
            productId={product[0]?.id}
            handleTotalRatings={setTotalRatings}
            handleAverageRating={setAverageRating}
        />,
    ];

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

    const handleTabSelect = (index: number) => {
        setTabIndex(index);
    };

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
            <div className="container">
                <div className="row">
                    <RenderIf isTrue={isFisico}>
                        <div className="col-md-5 col-sm-6 col-xs-12">
                            <ImagesViewer infoProduct={product[0]} />
                        </div>
                    </RenderIf>
                    <RenderIf isTrue={!isFisico}>
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
                <TabSet
                    titles={tabTitles}
                    panels={tabPanels}
                    tabIndex={tabIndex}
                    onSelect={handleTabSelect}
                    color={plantillaStyles?.colorFondo}
                    action={
                        isLarge ? (
                            <StarIconsContainer>
                                <span>
                                    {totalRatings}{' '}
                                    {totalRatings === 1 ? 'review' : 'reviews'}
                                </span>
                                <Divider>|</Divider>
                                <StarRatingDisplay
                                    calificacion={Math.floor(averageRating)}
                                    color={{
                                        filled: yellowStar,
                                        unfilled: grayStar,
                                    }}
                                />
                            </StarIconsContainer>
                        ) : undefined
                    }
                />
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
