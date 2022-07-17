const ProductImage = ({ portada }: { portada: string }) => {
    return (
        <div className="col-sm-1 col-xs-12">
            <figure>
                <img src={portada} className="img-thumbnail" alt="product" />
            </figure>
        </div>
    );
};

export default ProductImage;
