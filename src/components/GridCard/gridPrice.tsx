import formatPrice from '../../helpers/formatPrice';
import { PrecioContainer, StyledOferta } from './styles';

interface IGridPriceProps {
    precio?: number;
    oferta?: number;
    precioOferta?: number;
}

const GridPrice = ({
    precio = 0,
    oferta = 0,
    precioOferta = 0,
}: IGridPriceProps) => {
    const isNotFree = precio !== 0;
    const hasOffer = oferta !== 0;

    const newPrice = isNotFree ? formatPrice(precio) : 'FREE';

    const newOffer = hasOffer && formatPrice(precioOferta);

    return (
        <PrecioContainer className="col-xs-7">
            <h2>
                {hasOffer && (
                    <small>
                        <StyledOferta>{newPrice}</StyledOferta>
                    </small>
                )}{' '}
                <small>{newOffer || newPrice}</small>
            </h2>
        </PrecioContainer>
    );
};

export default GridPrice;
