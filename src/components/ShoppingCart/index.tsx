import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import './styles.scss';

const ShoppingCart = () => {
    const { styles } = useSelector(
        (state: RootStore) => state.plantillaReducer
    );
    const plantillaStyles = styles && styles[0];
    const cartStyles = {
        backgroundColor: plantillaStyles?.colorFondo,
        color: plantillaStyles?.colorTexto,
    };
    return (
        <div className="col-lg-3 col-md-3 col-sm-2 col-xs-12" id="carrito">
            <button
                className="btn btn-default pull-left backColor"
                style={cartStyles}
            >
                <FaShoppingCart />
            </button>
            <p>
                YOUR CART <span className="cantidadCesta">3</span> <br /> USD ${' '}
                <span className="sumaCesta">20</span>
            </p>
        </div>
    );
};

export default ShoppingCart;
