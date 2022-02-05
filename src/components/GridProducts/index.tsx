import { nanoid } from 'nanoid';
import useMediaQuery from '../../hooks/useMediaQuery';
import GridCard from '../GridCard';
import RenderIf from '../RenderIf';
import { StyledUl } from './styles';

interface IProduct {
    id: number;
    ruta: string;
    imgOferta: string;
    titulo: string;
    precio: number;
    oferta?: number;
    descuentoOferta?: number;
    tipo: string;
    nuevo?: boolean;
}

interface IGridProducts {
    products?: IProduct[];
}

const GridProducts = ({ products = [] }: IGridProducts) => {
    const isLarge = useMediaQuery('(min-width: 767px)');
    return (
        <StyledUl>
            {products.map((product) => (
                <li className="col-md-3 col-sm-6 col-xs-12" key={nanoid(10)}>
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

export default GridProducts;
