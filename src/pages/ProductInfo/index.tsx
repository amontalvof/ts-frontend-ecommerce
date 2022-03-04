/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { RootStore } from '../../redux/store';
import { FaReply, FaPlus } from 'react-icons/fa';
import { checkIsAllowedRoute } from '../../helpers/checkIsAllowedRoute';
import { TSubCategory } from '../../interfaces/subCategories';
import { TCategory } from '../../interfaces/categories';
import { TRoute } from '../../interfaces/productRoutes';
import { ImagesViewer } from '../../components';
import Spinner from '../../components/Spinner';
import useFetch from '../../hooks/useFetch';
import { baseUrl } from '../../constants';
import {
    InfoContainer,
    IconContainer,
    StyledSpan,
    StyledAnchor,
    StyledFacebookIcon,
    StyledWhatsappIcon,
    SpinnerContainer,
} from './styles';
import RenderIf from '../../components/RenderIf';
import VideoViewer from '../../components/VideoViewer';

interface IUseParams {
    categoryId?: string;
    subCategoryId?: string;
    productId?: string;
}

const ProductInfo = () => {
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

    const { loading: loadingProduct, value: valueProduct = {} } = useFetch(
        `${baseUrl}/product/${productId}`
    );
    const { product = [] } = valueProduct;
    const isFisico = product[0]?.tipo === 'fisico';
    const infoContainerClass = isFisico
        ? 'col-md-7 col-sm-6 col-xs-12'
        : 'col-sm-6 col-xs-12';

    const { loading: loadingSubCategories, subCategories = [] } =
        subCategoriesReducer;
    const { loading: loadingCategories, categories = [] } = categoriesReducer;
    const { loading: loadingProductsRoutes, routes = [] } =
        productsRoutesReducer;
    const { loading: loadingStyles, styles = [] } = plantillaReducer;

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
        loadingProduct
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
        <div className="container">
            <div className="row">
                <RenderIf isTrue={isFisico}>
                    <div className="col-md-5 col-sm-6 col-xs-12">
                        <ImagesViewer />
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
                    <div>
                        <div className="col-xs-6">
                            <h6>
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
                            </h6>
                        </div>
                        <div className="clearfix" />
                    </div>
                </InfoContainer>
            </div>
        </div>
    );
};

export default ProductInfo;
