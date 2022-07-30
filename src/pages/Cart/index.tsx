import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Breadcrumb, RenderIf } from '../../components';
import { CartContext } from '../../context/storageCart';
import formatPrice from '../../helpers/formatPrice';
import { RootStore } from '../../redux/store';
import Amount from './amount';
import Price from './price';
import ProductImage from './productImage';
import RemoveButton from './removeButton';
import SubTotal from './subTotal';
import Title from './title';
import Total from './total';
import CheckoutButton from './checkoutButton';
import {
    CabeceraCarrito,
    Container,
    ErrorContainer,
    ItemCarrito,
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
    const {
        cart: cartProductList,
        removeFromCart,
        increaseAmount,
        decreaseAmount,
        total,
    } = useContext(CartContext);
    const { plantillaReducer } = useSelector((state: RootStore) => state);
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];
    const isCartEmpty = cartProductList.length === 0;
    const newTotal = formatPrice(total);
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
                                            const newSubtotal = formatPrice(
                                                precio * cantidad
                                            );
                                            return (
                                                <div key={productId}>
                                                    <ItemCarrito className="row ">
                                                        <RemoveButton
                                                            productId={
                                                                productId
                                                            }
                                                            removeFromCart={
                                                                removeFromCart
                                                            }
                                                            colorFondo={
                                                                plantillaStyles?.colorFondo
                                                            }
                                                            colorTexto={
                                                                plantillaStyles?.colorTexto
                                                            }
                                                        />
                                                        <ProductImage
                                                            portada={portada}
                                                        />
                                                        <Title
                                                            titulo={titulo}
                                                        />
                                                        <Price
                                                            price={newPrice}
                                                        />
                                                        <Amount
                                                            tipo={tipo}
                                                            productId={
                                                                productId
                                                            }
                                                            cantidad={cantidad}
                                                            decreaseAmount={
                                                                decreaseAmount
                                                            }
                                                            increaseAmount={
                                                                increaseAmount
                                                            }
                                                        />
                                                        <SubTotal
                                                            subTotal={
                                                                newSubtotal
                                                            }
                                                        />
                                                    </ItemCarrito>
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
                                <Total total={newTotal} />
                                <CheckoutButton
                                    colorFondo={plantillaStyles?.colorFondo}
                                    colorTexto={plantillaStyles?.colorTexto}
                                />
                            </>
                        </RenderIf>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Cart;
