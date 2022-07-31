import { ProductImageContainer } from './styles';

const ProductImage = ({ portada }: { portada: string }) => {
    return (
        <ProductImageContainer className="col-sm-1 col-xs-12">
            <figure style={{ marginTop: '10px' }}>
                <img src={portada} className="img-thumbnail" alt="product" />
            </figure>
        </ProductImageContainer>
    );
};

export default ProductImage;
