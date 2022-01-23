import GridCard from '../GridCard';
import './styles.scss';

const products = [
    {
        id: 1,
        ruta: '/',
        imgOferta:
            'https://res.cloudinary.com/a03m02f92/image/upload/v1642642277/ecommerce/productos/accesorios/accesorio04_epj0ls.jpg',
        titulo: 'Collar de diamantes',
        precio: 0,
        tipo: 'fisico',
    },
    {
        id: 2,
        ruta: '/',
        imgOferta:
            'https://res.cloudinary.com/a03m02f92/image/upload/v1642642277/ecommerce/productos/accesorios/accesorio04_epj0ls.jpg',
        titulo: 'Collar de diamantes',
        precio: 11,
        oferta: 29,
        descuentoOferta: 40,
        tipo: 'fisico',
        nuevo: true,
    },
    {
        id: 3,
        ruta: '/',
        imgOferta:
            'https://res.cloudinary.com/a03m02f92/image/upload/v1642642277/ecommerce/productos/accesorios/accesorio04_epj0ls.jpg',
        titulo: 'Collar de diamantes',
        precio: 11,
        oferta: 29,
        descuentoOferta: 40,
        tipo: 'fisico',
    },
    {
        id: 4,
        ruta: '/',
        imgOferta:
            'https://res.cloudinary.com/a03m02f92/image/upload/v1642642277/ecommerce/productos/accesorios/accesorio04_epj0ls.jpg',
        titulo: 'Collar de diamantes',
        precio: 11,
        oferta: 0,
        tipo: 'virtual',
    },
];

const GridProducts = () => {
    return (
        <ul className="grid0" style={{ listStyleType: 'none' }}>
            {products.map((product) => (
                <li key={product.id} className="col-md-3 col-sm-6 col-xs-12">
                    <GridCard {...product} />
                </li>
            ))}
        </ul>
    );
};

export default GridProducts;
