import { Link } from 'react-router-dom';
import DeliverOrder from '../../components/DeliverOrder';
import RenderIf from '../../components/RenderIf';
import { IOrderInfo } from '../../interfaces/user';
import {
    ErrorContainer,
    StyledDate,
    StyledFaRegStar,
    StyledFaStar,
    StyledFaStarHalfAlt,
    StyledTitle,
} from './styles';

interface IMyOrdersProps {
    orders?: IOrderInfo[];
    colorfondo?: string;
    colortexto?: string;
}

const MyOrders = (props: IMyOrdersProps) => {
    const { orders = [], colorfondo, colortexto } = props;
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
                        const buyDate = `Bought on ${new Date(
                            order.comprasFecha
                        ).toLocaleString()}`;
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
                                        <StyledDate>
                                            <small>{buyDate}</small>
                                        </StyledDate>
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
                                    <div className="col-md-4 col-xs-12">
                                        <div className="pull-right">
                                            <a
                                                className="calificarProducto"
                                                href="#modalComentarios"
                                                data-toggle="modal"
                                            >
                                                <button
                                                    className="btn btn-default backColor"
                                                    style={{
                                                        outline: 'none',
                                                        color: colortexto,
                                                        backgroundColor:
                                                            colorfondo,
                                                    }}
                                                >
                                                    Rate Product
                                                </button>
                                            </a>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="pull-right">
                                            <h3 className="text-right">
                                                <StyledFaStar />
                                                <StyledFaStar />
                                                <StyledFaStar />
                                                <StyledFaStarHalfAlt />
                                                <StyledFaRegStar />
                                            </h3>
                                            <p
                                                className="panel panel-default text-right"
                                                style={{ padding: '5px' }}
                                            >
                                                <small>
                                                    Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Consequuntur adipisci
                                                    incidunt eligendi deserunt
                                                    ut accusamus quam minima
                                                    aliquam quod veritatis.
                                                    Ducimus ipsam, obcaecati
                                                    sint reiciendis mollitia
                                                    voluptas. Expedita
                                                    distinctio est ea
                                                    accusantium inventore iste
                                                    explicabo qui odio ipsum
                                                    magnam? Enim eius voluptatem
                                                    similique eos consequatur a
                                                    nobis itaque et cumque?
                                                </small>
                                            </p>
                                        </div>
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
