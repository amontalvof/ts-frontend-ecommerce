import formatPrice from '../../helpers/formatPrice';
import { StyledOferta } from './styles';

interface IListPriceProps {
    precio?: number;
    oferta?: number;
}

const ListPrice = ({ precio = 0, oferta = 0 }: IListPriceProps) => {
    const isNotFree = precio !== 0;
    const hasOffer = oferta !== 0;

    const newPrice = isNotFree ? formatPrice(precio) : 'FREE';

    const newOffer = hasOffer && formatPrice(oferta);
    return (
        <h2>
            {hasOffer && (
                <small>
                    <StyledOferta>{newOffer}</StyledOferta>
                </small>
            )}{' '}
            <small>{newPrice}</small>
        </h2>
    );
};

export default ListPrice;
