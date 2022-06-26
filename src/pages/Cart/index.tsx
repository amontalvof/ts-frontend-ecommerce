import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Breadcrumb } from '../../components';
import { RootStore } from '../../redux/store';
import { CabeceraCarrito, CabeceraCheckout, Center, Container } from './styles';

// TODO: Make cart responsive

const Cart = () => {
    const { plantillaReducer } = useSelector((state: RootStore) => state);
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];
    return (
        <Container>
            <div className="container-fluid">
                <div className="container">
                    <Breadcrumb />
                    <div className="panel panel-default">
                        <CabeceraCarrito className="panel-heading">
                            <div className="col-md-6 col-sm-7 col-xs-12 text-center">
                                <h3>
                                    <small>PRODUCT</small>
                                </h3>
                            </div>
                            <div className="col-md-2 col-sm-1 col-xs-0 text-center">
                                <h3>
                                    <small>PRICE</small>
                                </h3>
                            </div>
                            <div className="col-sm-2 col-xs-0 text-center">
                                <h3>
                                    <small>AMOUNT</small>
                                </h3>
                            </div>
                            <div className="col-sm-2 col-xs-0 text-center">
                                <h3>
                                    <small>SUBTOTAL</small>
                                </h3>
                            </div>
                        </CabeceraCarrito>
                        <div className="panel-body cuerpoCarrito">
                            <div className="row itemCarrito">
                                <div className="col-sm-1 col-xs-12">
                                    <br />
                                    <Center>
                                        <button
                                            className="btn btn-default backColor"
                                            style={{
                                                outline: 'none',
                                                backgroundColor:
                                                    plantillaStyles?.colorFondo,
                                            }}
                                        >
                                            <Center>
                                                <FaTimes
                                                    style={{
                                                        color: plantillaStyles?.colorTexto,
                                                    }}
                                                />
                                            </Center>
                                        </button>
                                    </Center>
                                </div>
                                <div className="col-sm-1 col-xs-12">
                                    <figure>
                                        <img
                                            src="https://res.cloudinary.com/a03m02f92/image/upload/v1643745307/ecommerce/productos/cursos/curso02_nkiwrk.jpg"
                                            className="img-thumbnail"
                                            alt="product"
                                        />
                                    </figure>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <br />
                                    <p className="tituloCarritoCompra text-left">
                                        Learn Javascript from Scratch
                                    </p>
                                </div>
                                <div className="col-md-2 col-sm-1 col-xs-12">
                                    <br />
                                    <p className="precioCarritoCompra text-center">
                                        USD $<span>10</span>
                                    </p>
                                </div>
                                <div className="col-md-2 col-sm-3 col-xs-8">
                                    <br />
                                    <div className="col-xs-8">
                                        <Center>
                                            <input
                                                type="number"
                                                className="form-control"
                                                min={1}
                                                defaultValue={1}
                                                readOnly
                                            />
                                        </Center>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-1 col-xs-4 text-center">
                                    <br />
                                    <p>
                                        <strong>
                                            USD $<span>10</span>
                                        </strong>
                                    </p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <hr />
                            <div className="row itemCarrito">
                                <div className="col-sm-1 col-xs-12">
                                    <br />
                                    <Center>
                                        <button
                                            className="btn btn-default backColor"
                                            style={{
                                                outline: 'none',
                                                backgroundColor:
                                                    plantillaStyles?.colorFondo,
                                            }}
                                        >
                                            <Center>
                                                <FaTimes
                                                    style={{
                                                        color: plantillaStyles?.colorTexto,
                                                    }}
                                                />
                                            </Center>
                                        </button>
                                    </Center>
                                </div>
                                <div className="col-sm-1 col-xs-12">
                                    <figure>
                                        <img
                                            src="https://res.cloudinary.com/a03m02f92/image/upload/v1643745373/ecommerce/productos/tecnologia/tecnologia02_sxtswp.jpg"
                                            className="img-thumbnail"
                                            alt="product"
                                        />
                                    </figure>
                                </div>
                                <div className="col-sm-4 col-xs-12">
                                    <br />
                                    <p className="tituloCarritoCompra text-left">
                                        Samsung Galaxy S10
                                    </p>
                                </div>
                                <div className="col-md-2 col-sm-1 col-xs-12">
                                    <br />
                                    <p className="precioCarritoCompra text-center">
                                        USD $<span>290</span>
                                    </p>
                                </div>
                                <div className="col-md-2 col-sm-3 col-xs-8">
                                    <br />
                                    <div className="col-xs-8">
                                        <Center>
                                            <input
                                                type="number"
                                                className="form-control"
                                                min={1}
                                                defaultValue={1}
                                            />
                                        </Center>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-1 col-xs-4 text-center">
                                    <br />
                                    <p>
                                        <strong>
                                            USD $<span>10</span>
                                        </strong>
                                    </p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <hr />
                        </div>
                        <div className="panel-body sumaCarrito">
                            <div className="col-md-4 col-sm-6 col-xs-12 pull-right well">
                                <div className="col-xs-6">
                                    <h4>TOTAL:</h4>
                                </div>
                                <div className="col-xs-6">
                                    <h4 className="sumaSubTotal">
                                        <strong>
                                            USD $<span>20</span>
                                        </strong>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <CabeceraCheckout className="panel-heading">
                            <button
                                className="btn btn-default btn-lg pull-right"
                                style={{
                                    outline: 'none',
                                    backgroundColor:
                                        plantillaStyles?.colorFondo,
                                    color: plantillaStyles?.colorTexto,
                                }}
                            >
                                REALIZAR PAGO
                            </button>
                        </CabeceraCheckout>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Cart;
