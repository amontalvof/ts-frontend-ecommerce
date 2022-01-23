import { FaHeart, FaEye, FaShoppingCart } from 'react-icons/fa';

interface IGridButtonsProps {
    tipo: string;
}

const GridButtons = ({ tipo }: IGridButtonsProps) => {
    const isVirtual = tipo === 'virtual';
    return (
        <div className="col-xs-6 enlaces">
            <div className="btn-group pull-right">
                <button
                    type="button"
                    className="btn btn-default btn-xs deseos"
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
                {isVirtual && (
                    <button
                        type="button"
                        className="btn btn-default btn-xs agregarCarrito"
                        data-toggle="tooltip"
                        title="Add to shopping cart"
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                margin: '3px 0',
                            }}
                        >
                            <FaShoppingCart />
                        </div>
                    </button>
                )}
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
    );
};

export default GridButtons;
