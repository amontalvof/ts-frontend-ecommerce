import { ListProducts } from '../../components';
import RenderIf from '../../components/RenderIf';
import { ErrorContainer, ListContainer } from './styles';
import { IProduct } from '../../interfaces/product';

interface IWishObject extends IProduct {
    id: number;
    fecha: string;
    id_producto: number;
    id_usuario: number;
}

interface IWishListProps {
    wishes?: IWishObject[];
}

const WishList = ({ wishes }: IWishListProps) => {
    console.log(wishes);
    return (
        <div>
            <RenderIf isTrue={!wishes?.length}>
                <ErrorContainer className="col-xs-12 text-center">
                    <h1>
                        <small>Oops!</small>
                    </h1>
                    <h2>You still have no products in your wish list.</h2>
                </ErrorContainer>
            </RenderIf>
            <RenderIf isTrue={!!wishes?.length}>
                <ListContainer>
                    <ListProducts products={wishes} showRemove />
                </ListContainer>
            </RenderIf>
        </div>
    );
};

export default WishList;
