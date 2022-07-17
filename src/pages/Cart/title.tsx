const Title = ({ titulo }: { titulo: string }) => {
    return (
        <div className="col-sm-4 col-xs-12">
            <br />
            <p className="tituloCarritoCompra text-left">{titulo}</p>
        </div>
    );
};

export default Title;
