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
    } = infoProduct;
    const { colorFondo, colorTexto } = plantillaStyles;
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
            <Features detalles={detalles} tipo={tipo} colorfondo={colorFondo} />
            <Delivery
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
            />
        </>
    );
};
