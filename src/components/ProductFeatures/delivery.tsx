import { FaShoppingCart, FaRegClock, FaRegEye } from 'react-icons/fa';
import { baseUrl } from '../../constants';
import useFetch from '../../hooks/useFetch';
import { IconContainer, StyledDeliveryText, StyledLabel } from './styles';

interface IDeliveryProps {
    ruta: string;
    entrega: number;
    precio: number;
    ventasGratis: number;
    vistasGratis: number;
    ventas: number;
    vistas: number;
}

interface IDeliveryInfoProps {
    deliveryText: string;
    salesText: string;
    viewsText: string;
}

const DeliveryInfo = ({
    deliveryText,
    salesText,
    viewsText,
}: IDeliveryInfoProps) => {
    return (
        <>
            <div className="clearfix" />
            <hr />
            <h4 className="col-md-12 col-sm-0 col-xs-0">
                <StyledLabel
                    className="label label-default"
                    style={{ fontWeight: 100 }}
                >
                    <FaRegClock style={{ marginRight: 5 }} />
                    <span>{deliveryText} |</span>
                    <FaShoppingCart style={{ margin: '0px 5px' }} />
                    <span>{salesText} |</span>
                    <FaRegEye style={{ margin: '0px 5px' }} />
                    <span>{viewsText}</span>{' '}
                </StyledLabel>
            </h4>
            <h4 className="col-lg-0 col-md-0 col-xs-12">
                <small style={{ fontWeight: 100 }}>
                    <IconContainer style={{ margin: '5px 0' }}>
                        <FaRegClock style={{ marginRight: 7 }} />
                        <StyledDeliveryText>
                            {deliveryText}
                        </StyledDeliveryText>{' '}
                        <br />
                    </IconContainer>
                    <IconContainer style={{ margin: '5px 0' }}>
                        <FaShoppingCart style={{ marginRight: 7 }} />
                        <StyledDeliveryText>
                            {salesText}
                        </StyledDeliveryText>{' '}
                        <br />
                    </IconContainer>
                    <IconContainer style={{ margin: '5px 0' }}>
                        <FaRegEye style={{ marginRight: 7 }} />
                        <StyledDeliveryText>
                            {viewsText}
                        </StyledDeliveryText>{' '}
                    </IconContainer>
                </small>
            </h4>
        </>
    );
};

const Delivery = ({
    ruta,
    entrega,
    precio,
    ventas,
    vistas,
    ventasGratis,
    vistasGratis,
}: IDeliveryProps) => {
    const isImmediateDelivery = entrega === 0;
    const isFree = precio === 0;
    const sales = isFree ? ventasGratis : ventas;
    const views = isFree ? vistasGratis : vistas;

    const newViews = views + 1;
    const item = isFree ? 'vistasGratis' : 'vistas';

    useFetch(`${baseUrl}/product/${ruta}`, {
        body: JSON.stringify({
            valor: newViews,
            item,
            ruta,
        }),
        method: 'PUT',
    });

    const deliveryText = isImmediateDelivery
        ? 'Immediate delivery'
        : `${entrega} days for delivery`;
    const viewsText =
        newViews === 1
            ? `Seen by ${newViews} person`
            : `Seen by ${newViews} people`;
    const salesText = sales === 1 ? `${sales} sale` : `${sales} sales`;
    return (
        <DeliveryInfo
            deliveryText={deliveryText}
            salesText={salesText}
            viewsText={viewsText}
        />
    );
};

export default Delivery;
