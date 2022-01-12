import { TStyle } from '../../interfaces/plantilla';

interface ISubCategoriesProps {
    plantillaStyles?: TStyle;
}
const SubCategories = ({ plantillaStyles }: ISubCategoriesProps) => {
    const { colorFondo, colorTexto } = plantillaStyles as TStyle;

    const linkStyles = {
        backgroundColor: colorFondo,
        color: colorTexto,
    };

    return (
        <>
            <li>
                <a
                    href="#"
                    className="pixelSubCategorias backColor"
                    style={linkStyles}
                >
                    Lorem Ipsum
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="pixelSubCategorias backColor"
                    style={linkStyles}
                >
                    Lorem Ipsum
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="pixelSubCategorias backColor"
                    style={linkStyles}
                >
                    Lorem Ipsum
                </a>
            </li>
            <li>
                <a
                    href="#"
                    className="pixelSubCategorias backColor"
                    style={linkStyles}
                >
                    Lorem Ipsum
                </a>
            </li>
        </>
    );
};

export default SubCategories;
