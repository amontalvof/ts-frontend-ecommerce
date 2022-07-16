import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Breadcrumb } from '../../components';
import RenderIf from '../../components/RenderIf';
import { CartContext } from '../../context/storageCart';
import formatPrice from '../../helpers/formatPrice';
import { RootStore } from '../../redux/store';
import {
    CabeceraCarrito,
    CabeceraCheckout,
    Center,
    Container,
    ErrorContainer,
} from './styles';

// TODO: Make cart responsive

interface ICartProduct {
    productId: number;
    portada: string;
    titulo: string;
    precio: number;
    cantidad: number;
    tipo: string;
}

const Cart = () => {
    const { cart: cartProductList } = useContext(CartContext);
    const { plantillaReducer } = useSelector((state: RootStore) => state);
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];
    const isCartEmpty = cartProductList.length === 0;
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
                            <RenderIf isTrue={isCartEmpty}>
                                <ErrorContainer className="col-12-xs text-center">
                                    <h2>
                                        There are no products in the shopping
                                        cart yet.
                                    </h2>
                                </ErrorContainer>
                            </RenderIf>
                            <RenderIf isTrue={!isCartEmpty}>
                                <>
                                    {cartProductList.map(
                                        (item: ICartProduct) => {
                                            const {
                                                productId,
                                                portada,
                                                titulo,
                                                precio,
                                                cantidad,
                                                tipo,
                                            } = item;
                                            const newPrice =
                                                formatPrice(precio);
                                            return (
                                                <div key={productId}>
                                                    <div className="row itemCarrito">
                                                        <div className="col-sm-1 col-xs-12">
                                                            <br />
                                                            <Center>
                                                                <button
                                                                    className="btn btn-default backColor"
                                                                    style={{
                                                                        outline:
                                                                            'none',
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
                                                                    src={
                                                                        portada
                                                                    }
                                                                    className="img-thumbnail"
                                                                    alt="product"
                                                                />
                                                            </figure>
                                                        </div>
                                                        <div className="col-sm-4 col-xs-12">
                                                            <br />
                                                            <p className="tituloCarritoCompra text-left">
                                                                {titulo}
                                                            </p>
                                                        </div>
                                                        <div className="col-md-2 col-sm-1 col-xs-12">
                                                            <br />
                                                            <p className="precioCarritoCompra text-center">
                                                                {newPrice}
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
                                                                        defaultValue={
                                                                            cantidad
                                                                        }
                                                                        readOnly={
                                                                            tipo ===
                                                                            'virtual'
                                                                        }
                                                                    />
                                                                </Center>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2 col-sm-1 col-xs-4 text-center">
                                                            <br />
                                                            <p>
                                                                <strong>
                                                                    USD $
                                                                    <span>
                                                                        10
                                                                    </span>
                                                                </strong>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                    <hr />
                                                </div>
                                            );
                                        }
                                    )}
                                </>
                            </RenderIf>
                        </div>
                        <RenderIf isTrue={!isCartEmpty}>
                            <>
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
                                        MAKE PAYMENT
                                    </button>
                                </CabeceraCheckout>
                            </>
                        </RenderIf>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Cart;
