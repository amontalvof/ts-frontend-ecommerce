import { Link } from 'react-router-dom';
import { filterSubCategoriesByCategoryId } from '../../helpers/filterSubCategoriesByCategoryId';
import { TStyle } from '../../interfaces/plantilla';
import { TSubCategories } from '../../interfaces/subCategories';

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
            <hr />
            <ul style={{ listStyleType: 'none' }}>
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
            </ul>
        </div>
    );
};

export default CategoriesList;
