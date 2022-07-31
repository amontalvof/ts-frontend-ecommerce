const SubTotal = ({ subTotal }: { subTotal: string }) => {
    return (
        <div className="col-md-2 col-sm-1 col-xs-12 text-center">
            <br />
            <p>
                <strong>{subTotal}</strong>
            </p>
        </div>
    );
};

export default SubTotal;
