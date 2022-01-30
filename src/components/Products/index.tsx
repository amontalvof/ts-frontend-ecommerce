import { FaChevronRight } from 'react-icons/fa';
import DisplayGridListBar from '../DisplayGridListBar';
import GridProducts from '../GridProducts';
import ListProducts from '../ListProducts';
import { ShowMoreButtonContainer, TituloDestacadoContainer } from './styles';

const products = [
    {
        id: 1,
        ruta: '/',
        imgOferta:
            'https://res.cloudinary.com/a03m02f92/image/upload/v1642642277/ecommerce/productos/accesorios/accesorio04_epj0ls.jpg',
        titulo: 'Collar de diamantes',
        precio: 0,
        tipo: 'fisico',
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate minus, consectetur beatae fugit odio iure repudiandae quia distinctio, id ducimus molestiae. Obcaecati, unde. Illo molestiae dolorum, saepe nisi enim iusto.',
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
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate minus, consectetur beatae fugit odio iure repudiandae quia distinctio, id ducimus molestiae. Obcaecati, unde. Illo molestiae dolorum, saepe nisi enim iusto.',
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
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate minus, consectetur beatae fugit odio iure repudiandae quia distinctio, id ducimus molestiae. Obcaecati, unde. Illo molestiae dolorum, saepe nisi enim iusto.',
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
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate minus, consectetur beatae fugit odio iure repudiandae quia distinctio, id ducimus molestiae. Obcaecati, unde. Illo molestiae dolorum, saepe nisi enim iusto.',
    },
];

interface IProductsProps {
    title: string;
}

const Products = ({ title }: IProductsProps) => {
    return (
        <>
            <DisplayGridListBar />
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <TituloDestacadoContainer className="col-xs-12">
                            <div className="col-sm-6 col-xs-12">
                                <h1>
                                    <small>{title}</small>
                                </h1>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                                <a href="see-more">
                                    <button className="btn btn-default backColor pull-right">
                                        <ShowMoreButtonContainer>
                                            SEE MORE{' '}
                                            <FaChevronRight
                                                style={{ marginLeft: '5px' }}
                                            />
                                        </ShowMoreButtonContainer>
                                    </button>
                                </a>
                            </div>
                        </TituloDestacadoContainer>
                        <div className="clearfix" />
                        <hr />
                    </div>
                    <GridProducts products={products} />
                    <ListProducts products={products} />
                </div>
            </div>
        </>
    );
};

export default Products;
