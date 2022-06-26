import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootStore } from '../../redux/store';
import { Carrito } from './styles';

const ShoppingCart = () => {
    const { push } = useHistory();
    const { styles } = useSelector(
        (state: RootStore) => state.plantillaReducer
    );
    const plantillaStyles = styles && styles[0];
    const cartStyles = {
        backgroundColor: plantillaStyles?.colorFondo,
        color: plantillaStyles?.colorTexto,
    };
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
                YOUR CART <span className="cantidadCesta">3</span> <br /> USD ${' '}
                <span className="sumaCesta">20</span>
            </p>
        </Carrito>
    );
};

export default ShoppingCart;
