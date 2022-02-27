import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { otherCategoriesRoutes, relevantRoutes } from '../../constants';
import filterCategoriesByRoute from '../../helpers/filterCategoriesByRoute';
import { TCategory } from '../../interfaces/categories';
import { TSubCategory } from '../../interfaces/subCategories';
import { RootStore } from '../../redux/store';
import RenderIf from '../RenderIf';
import { StyledLink } from './styles';

interface IUseParams {
    categoryId?: string;
    subCategoryId?: string;
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
            <li>
                <CategoryLink
                    categoryId={categoryId}
                    colorfondo={plantillaStyles?.colorFondo}
                    categoria={categoria}
                />
            </li>
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
