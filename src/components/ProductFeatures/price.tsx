import formatPrice from '../../helpers/formatPrice';
import { RenderIf } from '../RenderIf';
import { StyledOferta } from './styles';

interface IPriceProps {
    precio: number;
    precioOferta: number;
    oferta: number;
}

const Price = ({ precio, oferta, precioOferta }: IPriceProps) => {
    const isNotFree = precio !== 0;
    const hasOffer = oferta !== 0;

    const newPrice = isNotFree ? formatPrice(precio) : 'FREE';

    const newOffer = hasOffer && formatPrice(precioOferta);

    return (
        <>
            <RenderIf isTrue={!isNotFree}>
                <h2 className="text-muted">{newPrice}</h2>
            </RenderIf>
            <RenderIf isTrue={isNotFree}>
                <>
                    <RenderIf isTrue={!hasOffer}>
                        <h2 className="text-muted">{newPrice}</h2>
                    </RenderIf>
                    <RenderIf isTrue={hasOffer}>
                        <h2 className="text-muted">
                            <span>
                                <StyledOferta>{newPrice}</StyledOferta>
                            </span>{' '}
                            <span>{newOffer}</span>
                        </h2>
                    </RenderIf>
                </>
            </RenderIf>
        </>
    );
};

export default Price;
