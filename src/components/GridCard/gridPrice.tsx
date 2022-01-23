interface IGridPriceProps {
    precio?: number;
    oferta?: number;
}

const GridPrice = ({ precio = 0, oferta = 0 }: IGridPriceProps) => {
    const isNotFree = precio !== 0;
    const hasOffer = oferta !== 0;

    const newPrice = isNotFree
        ? new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
          }).format(precio)
        : 'FREE';

    const newOffer =
        hasOffer &&
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'code',
        }).format(oferta);

    return (
        <div className="col-xs-6 precio">
            <h2>
                {hasOffer && (
                    <small>
                        <strong className="oferta">{newOffer}</strong>
                    </small>
                )}{' '}
                <small>{newPrice}</small>
            </h2>
        </div>
    );
};

export default GridPrice;
