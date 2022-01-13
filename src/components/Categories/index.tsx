import { TStyle } from '../../interfaces/plantilla';
import SubCategories from '../SubCategories';

interface ICategoriesProps {
    plantillaStyles: TStyle;
    category: string;
    to: string;
    id: number;
}

const Categories = ({ plantillaStyles, category }: ICategoriesProps) => {
    const { colorFondo, colorTexto } = plantillaStyles as TStyle;

    const linkStyles = {
        backgroundColor: colorFondo,
        color: colorTexto,
    };

    return (
        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
            <h4>
                <a
                    href="#"
                    className="pixelCategorias backColor"
                    style={linkStyles}
                >
                    {category}
                </a>
            </h4>
            <hr />
            <ul>
                <SubCategories plantillaStyles={plantillaStyles} />
            </ul>
        </div>
    );
};

export default Categories;
