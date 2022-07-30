import { useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import filterCategoriesByRoute from '../../helpers/filterCategoriesByRoute';
import { TCategory } from '../../interfaces/categories';
import { TSubCategory } from '../../interfaces/subCategories';
import { RootStore } from '../../redux/store';
import { RenderIf } from '../RenderIf';
import { StyledLink } from './styles';
import {
    otherCategoriesRoutes,
    relevantRoutes,
    privateRoutes,
} from '../../constants';

interface IUseParams {
    categoryId?: string;
    subCategoryId?: string;
    uid?: string;
}

interface ICategoryLinkProps {
    categoryId: string;
    categoria?: string;
    colorfondo?: string;
}

const CategoryLink = ({
    categoryId,
    colorfondo,
    categoria,
}: ICategoryLinkProps) => {
    if (!otherCategoriesRoutes.includes(categoryId)) {
        return (
            <StyledLink to={`/${categoryId}?page=1`} colorfondo={colorfondo}>
                {categoria}
            </StyledLink>
        );
    }
    return <span>{categoria}</span>;
};

export const Breadcrumb = () => {
    const location = useLocation();
    const { categoryId = '', subCategoryId = '' } = useParams<IUseParams>();
    const {
        subCategoriesReducer,
        categoriesReducer,
        plantillaReducer,
        searchReducer,
    } = useSelector((state: RootStore) => state);
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];
    const { subCategories = [] } = subCategoriesReducer;
    const { categories = [] } = categoriesReducer;
    const privateRoute = location.pathname.split('/')[1];
    const isPrivate = privateRoutes.includes(privateRoute);
    const { categoria } =
        filterCategoriesByRoute<TCategory>(
            [
                ...otherCategoriesRoutes.map(
                    (item) => ({ ruta: item, categoria: item } as TCategory)
                ),
                ...categories,
            ],
            categoryId
        ) || {};

    const { subcategoria } =
        filterCategoriesByRoute<TSubCategory>(
            [
                ...relevantRoutes.map(
                    (item) =>
                        ({ ruta: item, subcategoria: item } as TSubCategory)
                ),
                ...subCategories,
            ],
            subCategoryId
        ) || {};

    const { searchValue } = searchReducer;

    return (
        <ul className="breadcrumb fondoBreadcrumb text-uppercase">
            <RenderIf isTrue={isPrivate}>
                <li>
                    <span>{privateRoute}</span>
                </li>
            </RenderIf>
            <RenderIf isTrue={!isPrivate}>
                <li>
                    <CategoryLink
                        categoryId={categoryId}
                        colorfondo={plantillaStyles?.colorFondo}
                        categoria={categoria}
                    />
                </li>
            </RenderIf>
            <RenderIf isTrue={!!subcategoria || !!searchValue}>
                <li className="active pagActiva">
                    <StyledLink
                        to={`/${categoryId}/${
                            subCategoryId || searchValue
                        }?page=1`}
                        colorfondo={plantillaStyles?.colorFondo}
                    >
                        {subcategoria || searchValue}
                    </StyledLink>
                </li>
            </RenderIf>
        </ul>
    );
};
