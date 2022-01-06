import { FaShoppingCart } from 'react-icons/fa';
import './styles.scss';

const ShoppingCart = () => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-2 col-xs-12" id="carrito">
            <button className="btn btn-default pull-left backColor">
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
