import { Link } from 'react-router-dom';
import { filterSubCategoriesByCategoryId } from '../../helpers/filterSubCategoriesByCategoryId';
import hexToRGB from '../../helpers/hexToRGB';
import { TStyle } from '../../interfaces/plantilla';
import { TSubCategories } from '../../interfaces/subCategories';
import { StyledCategoriesListUl, StyledDivider } from './styles';

interface ICategoriesListProps {
    plantillaStyles: TStyle;
    category: string;
    to: string;
    id: number;
    subCategories?: TSubCategories;
}

const CategoriesList = ({
    plantillaStyles,
    category,
    id,
    subCategories,
    to,
}: ICategoriesListProps) => {
    const { colorFondo, colorTexto } = plantillaStyles as TStyle;

    const filteredSubCategories = filterSubCategoriesByCategoryId(
        subCategories,
        id
    );

    const linkStyles = {
        backgroundColor: colorFondo,
        color: colorTexto,
    };

    const dividerStyles = {
        border: `1px solid ${hexToRGB(colorTexto, '0.3')}`,
    };

    return (
        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
            <h4>
                <Link
                    to={`/${to}`}
                    className="pixelCategorias backColor"
                    style={linkStyles}
                >
                    {category}
                </Link>
            </h4>
            <StyledDivider style={dividerStyles} />
            <StyledCategoriesListUl>
                {filteredSubCategories.map((item) => (
                    <li key={item.id}>
                        <Link
                            to={`/${to}/${item.ruta}`}
                            className="pixelSubCategorias backColor"
                            style={linkStyles}
                        >
                            {item.subcategoria}
                        </Link>
                    </li>
                ))}
            </StyledCategoriesListUl>
        </div>
    );
};

export default CategoriesList;
