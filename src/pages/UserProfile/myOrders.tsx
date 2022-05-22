import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CommentModal from '../../components/CommentModal';
import DeliverOrder from '../../components/DeliverOrder';
import RenderIf from '../../components/RenderIf';
import StarRatingDisplay from '../../components/StarRatingDisplay';
import { grayStar, yellowStar } from '../../constants';
import useMediaQuery from '../../hooks/useMediaQuery';
import { IOrderInfo } from '../../interfaces/user';
import { openCommentModal } from '../../redux/actions/commentModalActions';
import { ErrorContainer, StyledDate, StyledTitle, StyledH3 } from './styles';

interface IMyOrdersProps {
    orders?: IOrderInfo[];
    colorfondo?: string;
    colortexto?: string;
}

const MyOrders = (props: IMyOrdersProps) => {
    const isLarge = useMediaQuery('(min-width: 500px)');
    const dispatch = useDispatch();
    const { orders = [], colorfondo, colortexto } = props;
    const isEmptyOrders = orders.length === 0;

    const handleRate = (params: IOrderInfo) => {
        const { commentsId, productosId, calificacion, comentario } = params;
        dispatch(
            openCommentModal({
                commentsId,
                productosId,
                calificacion,
                comentario,
            })
        );
    };
    return (
        <>
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
                                                        style={{
                                                            outline: 'none',
                                                        }}
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
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent:
                                                        !isVirtual && !isLarge
                                                            ? 'center'
                                                            : 'flex-end',
                                                }}
                                            >
                                                <a
                                                    className="calificarProducto"
                                                    href="#modalComentarios"
                                                    data-toggle="modal"
                                                >
                                                    <button
                                                        className="btn btn-default backColor"
                                                        onClick={() =>
                                                            handleRate(order)
                                                        }
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
                                        </div>
                                        <div className="col-md-4 col-xs-12">
                                            <div
                                                className="pull-right"
                                                style={{ width: '100%' }}
                                            >
                                                <StyledH3
                                                    className={
                                                        isLarge
                                                            ? 'text-right'
                                                            : 'text-center'
                                                    }
                                                >
                                                    <StarRatingDisplay
                                                        calificacion={
                                                            order.calificacion
                                                        }
                                                        color={{
                                                            filled: yellowStar,
                                                            unfilled: grayStar,
                                                        }}
                                                    />
                                                </StyledH3>
                                                <RenderIf
                                                    isTrue={!!order.comentario}
                                                >
                                                    <p
                                                        className="panel panel-default text-right"
                                                        style={{
                                                            padding: '5px',
                                                        }}
                                                    >
                                                        <small>
                                                            {order.comentario}
                                                        </small>
                                                    </p>
                                                </RenderIf>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                </RenderIf>
            </div>
            <CommentModal />
        </>
    );
};

export default MyOrders;
