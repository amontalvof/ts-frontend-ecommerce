import { Link } from 'react-router-dom';
import DeliverOrder from '../../components/DeliverOrder';
import RenderIf from '../../components/RenderIf';
import { IOrderInfo } from '../../interfaces/user';
import { ErrorContainer, StyledTitle } from './styles';

interface IMyOrdersProps {
    orders?: IOrderInfo[];
}

const MyOrders = ({ orders = [] }: IMyOrdersProps) => {
    const isEmptyOrders = orders.length === 0;
    return (
        <div className="panel-group">
            <RenderIf isTrue={isEmptyOrders}>
                <ErrorContainer className="col-xs-12 text-center">
                    <h1>
                        <small>Oops!</small>
                    </h1>
                    <h2>You still have no orders made in this store</h2>
                </ErrorContainer>
            </RenderIf>
            <RenderIf isTrue={!isEmptyOrders}>
                <>
                    {orders.map((order: IOrderInfo) => {
                        const isVirtual = order.tipo === 'virtual';
                        const deliveryText =
                            order.entrega === 1
                                ? `Delivery process: ${order.entrega} business day`
                                : `Delivery process: ${order.entrega} business days`;

                        return (
                            <div
                                className="panel panel-default"
                                key={`order-${order.id}`}
                            >
                                <div className="panel-body">
                                    <div className="col-md-2 col-sm-6 col-xs-12">
                                        <figure>
                                            <img
                                                className="img-thumbnail"
                                                src={order.portada}
                                                alt="product"
                                            />
                                        </figure>
                                    </div>
                                    <div className="col-sm-6 col-xs-12">
                                        <StyledTitle>
                                            <small>{order.titulo}</small>
                                        </StyledTitle>
                                        <p>{order.titular}</p>
                                        <RenderIf isTrue={isVirtual}>
                                            <Link to="#">
                                                <button
                                                    className="btn btn-default pull-left"
                                                    style={{ outline: 'none' }}
                                                >
                                                    Go to course
                                                </button>
                                            </Link>
                                        </RenderIf>
                                        <RenderIf isTrue={!isVirtual}>
                                            <DeliverOrder
                                                deliveryText={deliveryText}
                                                envio={order.envio}
                                            />
                                        </RenderIf>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </>
            </RenderIf>
        </div>
    );
};

export default MyOrders;
