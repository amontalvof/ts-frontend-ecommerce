const Price = ({ price }: { price: string }) => {
    return (
        <div className="col-md-2 col-sm-1 col-xs-12">
            <br />
            <p className="precioCarritoCompra text-center">{price}</p>
        </div>
    );
};

export default Price;
