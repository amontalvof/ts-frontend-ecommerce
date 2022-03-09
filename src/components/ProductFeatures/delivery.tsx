import { FaShoppingCart, FaRegClock, FaRegEye } from 'react-icons/fa';
import { IconContainer, StyledDeliveryText, StyledLabel } from './styles';

interface IDeliveryProps {
    entrega: number;
    precio: number;
    ventasGratis: number;
    vistasGratis: number;
    ventas: number;
    vistas: number;
}

interface IDeliveryInfoProps {
    deliveryText: string;
    ventas: number;
    vistas: number;
}

const DeliveryInfo = ({ deliveryText, ventas, vistas }: IDeliveryInfoProps) => {
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
                    <span>{ventas} registered |</span>
                    <FaRegEye style={{ margin: '0px 5px' }} />
                    <span>Seen by {vistas} people</span>{' '}
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
                            {ventas} registered
                        </StyledDeliveryText>{' '}
                        <br />
                    </IconContainer>
                    <IconContainer style={{ margin: '5px 0' }}>
                        <FaRegEye style={{ marginRight: 7 }} />
                        <StyledDeliveryText>
                            Seen by {vistas} people
                        </StyledDeliveryText>{' '}
                    </IconContainer>
                </small>
            </h4>
        </>
    );
};

const Delivery = ({
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
    const deliveryText = isImmediateDelivery
        ? 'Immediate delivery'
        : `${entrega} days for delivery`;
    return (
        <DeliveryInfo
            deliveryText={deliveryText}
            ventas={sales}
            vistas={views}
        />
    );
};

export default Delivery;
