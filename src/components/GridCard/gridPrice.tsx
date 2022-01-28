import formatPrice from '../../helpers/formatPrice';
import { PrecioContainer, StyledOferta } from './styles';

interface IGridPriceProps {
    precio?: number;
    oferta?: number;
}

const GridPrice = ({ precio = 0, oferta = 0 }: IGridPriceProps) => {
    const isNotFree = precio !== 0;
    const hasOffer = oferta !== 0;

    const newPrice = isNotFree ? formatPrice(precio) : 'FREE';

    const newOffer = hasOffer && formatPrice(oferta);

    return (
        <PrecioContainer className="col-xs-7">
            <h2>
                {hasOffer && (
                    <small>
                        <StyledOferta className="oferta">
                            {newOffer}
                        </StyledOferta>
                    </small>
                )}{' '}
                <small>{newPrice}</small>
            </h2>
        </PrecioContainer>
    );
};

export default GridPrice;
