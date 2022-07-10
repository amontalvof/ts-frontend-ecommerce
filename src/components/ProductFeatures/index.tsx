import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import addToCart from '../../helpers/addToCart';
import checkIfFeaturesWhereSelected from '../../helpers/checkIfFeaturesWhereSelected';
import { useForm } from '../../hooks/useForm';
import { TStyle } from '../../interfaces/plantilla';
import { IProduct } from '../../interfaces/product';
import BuyButtons from './buyButtons';
import Delivery from './delivery';
import Description from './description';
import Features from './features';
import Price from './price';
import Title from './title';

interface IProductFeaturesProps {
    infoProduct: IProduct;
    plantillaStyles: TStyle;
}
export const ProductFeatures = ({
    infoProduct,
    plantillaStyles,
}: IProductFeaturesProps) => {
    const {
        id,
        ruta,
        titulo,
        nuevo,
        oferta,
        descuentoOferta,
        precio,
        precioOferta,
        descripcion,
        detalles,
        tipo,
        entrega,
        ventasGratis,
        vistasGratis,
        ventas,
        vistas,
        portada,
        peso,
    } = infoProduct;
    const { push } = useHistory();
    const { colorFondo, colorTexto } = plantillaStyles;
    const [formValues, handleInputChange] = useForm({
        Color: '',
        Size: '',
        Brand: '',
    });

    const handleAddCart = async () => {
        if (tipo === 'virtual') {
            const newProduct = {
                productId: id,
                portada,
                titulo,
                precio,
                tipo,
                peso,
                cantidad: 1,
            };
            const result = await addToCart(newProduct, colorFondo);
            if (result.isConfirmed) {
                return push('/cart');
            }
            return null;
        }
        const { isFeaturesSelected, finalFormValues } =
            checkIfFeaturesWhereSelected(detalles, formValues);
        if (isFeaturesSelected) {
            const newProduct = {
                productId: id,
                portada,
                titulo,
                precio,
                tipo,
                peso,
                cantidad: 1,
                ...formValues,
            };
            const result = await addToCart(newProduct, colorFondo);
            if (result.isConfirmed) {
                return push('/cart');
            }
            return null;
        }
        toast.error(
            `Please select the following characteristics ${Object.keys(
                finalFormValues
            )}`,
            {
                position: toast.POSITION.TOP_RIGHT,
            }
        );
    };

    return (
        <>
            <Title
                titulo={titulo}
                nuevo={nuevo}
                oferta={oferta}
                descuentoOferta={descuentoOferta}
                colorfondo={colorFondo}
                colortexto={colorTexto}
            />
            <Price
                precio={precio}
                precioOferta={precioOferta}
                oferta={oferta}
            />
            <Description descripcion={descripcion} />
            <Features
                detalles={detalles}
                tipo={tipo}
                colorfondo={colorFondo}
                formValues={formValues}
                onChange={handleInputChange}
            />
            <Delivery
                ruta={ruta}
                entrega={entrega}
                precio={precio}
                ventasGratis={ventasGratis}
                vistasGratis={vistasGratis}
                vistas={vistas}
                ventas={ventas}
            />
            <BuyButtons
                precio={precio}
                tipo={tipo}
                colorfondo={colorFondo}
                colortexto={colorTexto}
                onAddToCart={handleAddCart}
            />
        </>
    );
};
