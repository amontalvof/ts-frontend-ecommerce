import { FaHeart, FaEye, FaShoppingCart } from 'react-icons/fa';
import './styles.scss';

const GridProducts = () => {
    return (
        <ul className="grid0" style={{ listStyleType: 'none' }}>
            <li className="col-md-3 col-sm-6 col-xs-12">
                <figure>
                    <a href="#" className="pixelProducto">
                        <img
                            src="https://res.cloudinary.com/a03m02f92/image/upload/v1642642277/ecommerce/productos/accesorios/accesorio04_epj0ls.jpg"
                            className="img-responsive"
                        />
                    </a>
                </figure>
                <h4>
                    <small>
                        <a href="#" className="pixelProducto">
                            Collar de diamantes
                            <br />
                            <br />
                        </a>
                    </small>
                </h4>
                <div className="col-xs-6 precio">
                    <h2>
                        <small>FREE</small>
                    </h2>
                </div>
                <div className="col-xs-6 enlaces">
                    <div className="btn-group pull-right">
                        <button
                            type="button"
                            className="btn btn-default btn-xs deseos"
                            // idproducto={470}
                            data-toggle="tooltip"
                            title="Add to my wish list"
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    margin: '3px 0',
                                }}
                            >
                                <FaHeart />
                            </div>
                        </button>
                        <a href="#" className="pixelProducto">
                            <button
                                type="button"
                                className="btn btn-default btn-xs"
                                data-toggle="tooltip"
                                title="See product"
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        margin: '3px 0',
                                    }}
                                >
                                    <FaEye />
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12">
                <figure>
                    <a href="#" className="pixelProducto">
                        <img
                            src="https://res.cloudinary.com/a03m02f92/image/upload/v1642642277/ecommerce/productos/accesorios/accesorio04_epj0ls.jpg"
                            className="img-responsive"
                        />
                    </a>
                </figure>
                <h4>
                    <small>
                        <a href="#" className="pixelProducto">
                            Collar de diamantes
                            <br />
                            <span className="label label-warning fontSize">
                                Nuevo
                            </span>{' '}
                            <span className="label label-warning fontSize">
                                40% off
                            </span>
                        </a>
                    </small>
                </h4>
                <div className="col-xs-6 precio">
                    <h2>
                        <small>
                            <strong className="oferta">USD $29</strong>
                        </small>{' '}
                        <small>$11</small>
                    </h2>
                </div>
                <div className="col-xs-6 enlaces">
                    <div className="btn-group pull-right">
                        <button
                            type="button"
                            className="btn btn-default btn-xs deseos"
                            // idproducto={470}
                            data-toggle="tooltip"
                            title="Add to my wish list"
                        >
                            <FaHeart />
                        </button>
                        <a href="#" className="pixelProducto">
                            <button
                                type="button"
                                className="btn btn-default btn-xs"
                                data-toggle="tooltip"
                                title="See product"
                            >
                                <FaEye />
                            </button>
                        </a>
                    </div>
                </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12">
                <figure>
                    <a href="#" className="pixelProducto">
                        <img
                            src="https://res.cloudinary.com/a03m02f92/image/upload/v1642642277/ecommerce/productos/accesorios/accesorio04_epj0ls.jpg"
                            className="img-responsive"
                        />
                    </a>
                </figure>
                <h4>
                    <small>
                        <a href="#" className="pixelProducto">
                            Collar de diamantes
                            <br />
                            <span className="label label-warning fontSize">
                                40% off
                            </span>
                        </a>
                    </small>
                </h4>
                <div className="col-xs-6 precio">
                    <h2>
                        <small>
                            <strong className="oferta">USD $29</strong>
                        </small>{' '}
                        <small>$11</small>
                    </h2>
                </div>
                <div className="col-xs-6 enlaces">
                    <div className="btn-group pull-right">
                        <button
                            type="button"
                            className="btn btn-default btn-xs deseos"
                            // idproducto={470}
                            data-toggle="tooltip"
                            title="Add to my wish list"
                        >
                            <FaHeart />
                        </button>
                        <a href="#" className="pixelProducto">
                            <button
                                type="button"
                                className="btn btn-default btn-xs"
                                data-toggle="tooltip"
                                title="See product"
                            >
                                <FaEye />
                            </button>
                        </a>
                    </div>
                </div>
            </li>
            <li className="col-md-3 col-sm-6 col-xs-12">
                <figure>
                    <a href="#" className="pixelProducto">
                        <img
                            src="https://res.cloudinary.com/a03m02f92/image/upload/v1642642277/ecommerce/productos/accesorios/accesorio04_epj0ls.jpg"
                            className="img-responsive"
                        />
                    </a>
                </figure>
                <h4>
                    <small>
                        <a href="#" className="pixelProducto">
                            Collar de diamantes
                            <br />
                            <br />
                        </a>
                    </small>
                </h4>
                <div className="col-xs-6 precio">
                    <h2>
                        <small>$11</small>
                    </h2>
                </div>
                <div className="col-xs-6 enlaces">
                    <div className="btn-group pull-right">
                        <button
                            type="button"
                            className="btn btn-default btn-xs deseos"
                            // idproducto={470}
                            data-toggle="tooltip"
                            title="Add to my wish list"
                        >
                            <FaHeart />
                        </button>
                        <button
                            type="button"
                            className="btn btn-default btn-xs agregarCarrito"
                            // idProducto="404"
                            // imagen="http://localhost/backend/vistas/img/productos/cursos/curso05.jpg"
                            // titulo="Curso de Bootstrap"
                            // precio="10"
                            // tipo="virtual"
                            // peso="0"
                            data-toggle="tooltip"
                            title="Add to shopping cart"
                        >
                            <FaShoppingCart />
                        </button>
                        <a href="#" className="pixelProducto">
                            <button
                                type="button"
                                className="btn btn-default btn-xs"
                                data-toggle="tooltip"
                                title="See product"
                            >
                                <FaEye />
                            </button>
                        </a>
                    </div>
                </div>
            </li>
        </ul>
    );
};

export default GridProducts;
