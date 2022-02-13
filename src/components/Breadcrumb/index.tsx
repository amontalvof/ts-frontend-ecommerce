import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
    if (categoryId !== 'products') {
        return (
            <StyledLink to={`/${categoryId}`} colorfondo={colorfondo}>
                {categoria}
            </StyledLink>
        );
    }
    return <span>{categoria}</span>;
};

const Breadcrumb = () => {
    const { categoryId = '', subCategoryId = '' } = useParams<IUseParams>();
    const { subCategoriesReducer, categoriesReducer, plantillaReducer } =
        useSelector((state: RootStore) => state);
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];
    const { subCategories = [] } = subCategoriesReducer;
    const { categories = [] } = categoriesReducer;
    const { categoria } =
        filterCategoriesByRoute<TCategory>(
            [
                { ruta: 'products', categoria: 'products' } as TCategory,
                ...categories,
            ],
            categoryId
        ) || {};
    const { subcategoria } =
        filterCategoriesByRoute<TSubCategory>(
            [
                { ruta: 'free', subcategoria: 'free' } as TSubCategory,
                { ruta: 'views', subcategoria: 'views' } as TSubCategory,
                { ruta: 'sales', subcategoria: 'sales' } as TSubCategory,
                ...subCategories,
            ],
            subCategoryId
        ) || {};

    return (
        <ul className="breadcrumb fondoBreadcrumb text-uppercase">
            <li>
                <CategoryLink
                    categoryId={categoryId}
                    colorfondo={plantillaStyles?.colorFondo}
                    categoria={categoria}
                />
            </li>
            <RenderIf isTrue={!!subcategoria}>
                <li className="active pagActiva">
                    <StyledLink
                        to={`/${categoryId}/${subCategoryId}`}
                        colorfondo={plantillaStyles?.colorFondo}
                    >
                        {subcategoria}
                    </StyledLink>
                </li>
            </RenderIf>
        </ul>
    );
};

export default Breadcrumb;
