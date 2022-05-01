import { nanoid } from 'nanoid';
import useMediaQuery from '../../hooks/useMediaQuery';
import { IProduct } from '../../interfaces/product';
import { GridCard } from '../GridCard';
import RenderIf from '../RenderIf';
import { StyledUl } from './styles';

interface IGridProducts {
    products?: IProduct[];
}

export const GridProducts = ({ products = [] }: IGridProducts) => {
    const isLarge = useMediaQuery('(min-width: 767px)');
    return (
        <StyledUl>
            {products.map((product) => (
                <li className="col-md-3 col-sm-6 col-xs-12" key={nanoid(10)}>
                    {product.id}
                    <GridCard {...product} />
                    <RenderIf isTrue={!isLarge}>
                        <div className="col-xs-12">
                            <hr />
                        </div>
                    </RenderIf>
                </li>
            ))}
        </StyledUl>
    );
};
