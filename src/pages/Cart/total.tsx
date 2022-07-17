const Total = ({ total }: { total: string }) => {
    return (
        <div className="panel-body sumaCarrito">
            <div className="col-md-4 col-sm-6 col-xs-12 pull-right well">
                <div className="col-xs-6">
                    <h4>TOTAL:</h4>
                </div>
                <div className="col-xs-6">
                    <h4 className="sumaSubTotal">
                        <strong>{total}</strong>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Total;
