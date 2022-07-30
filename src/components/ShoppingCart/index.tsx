import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../context/storageCart';
import formatPrice from '../../helpers/formatPrice';
import { RootStore } from '../../redux/store';
import { Carrito } from './styles';

export const ShoppingCart = () => {
    const { total, cartItems } = useContext(CartContext);
    const { push } = useHistory();
    const { styles } = useSelector(
        (state: RootStore) => state.plantillaReducer
    );
    const plantillaStyles = styles && styles[0];
    const cartStyles = {
        backgroundColor: plantillaStyles?.colorFondo,
        color: plantillaStyles?.colorTexto,
    };
    const newTotal = formatPrice(total);

    return (
        <Carrito className="col-lg-3 col-md-3 col-sm-2 col-xs-12">
            <button
                className="btn btn-default pull-left"
                style={{ ...cartStyles, outline: 'none' }}
                onClick={() => push('/cart')}
            >
                <FaShoppingCart />
            </button>
            <p>
                YOUR CART <span className="cantidadCesta">{cartItems}</span>{' '}
                <br /> <span className="sumaCesta">{newTotal}</span>
            </p>
        </Carrito>
    );
};
