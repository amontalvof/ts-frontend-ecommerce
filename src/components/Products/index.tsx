import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootStore } from '../../redux/store';
import DisplayGridListBar from '../DisplayGridListBar';
import GridProducts from '../GridProducts';
import ListProducts from '../ListProducts';
import { ShowMoreButtonContainer, TituloDestacadoContainer } from './styles';
import RenderIf from '../RenderIf/index';
import { IProduct } from '../../interfaces/product';

interface IProductsProps {
    title: string;
    products?: IProduct[];
    seeMoreRoute: string;
}

const Products = ({ title, products, seeMoreRoute }: IProductsProps) => {
    const [display, setDisplay] = useState<string>('grid');
    const state = useSelector((state: RootStore) => state);
    const { plantillaReducer } = state;
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];

    return (
        <>
            <DisplayGridListBar
                display={display}
                changeDisplay={setDisplay}
                plantillaStyles={plantillaStyles}
            />
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <TituloDestacadoContainer className="col-xs-12">
                            <div className="col-sm-6 col-xs-12">
                                <h1>
                                    <small>{title}</small>
                                </h1>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                                <Link to={seeMoreRoute}>
                                    <button
                                        className="btn btn-default pull-right"
                                        style={{
                                            outline: 'none',
                                            backgroundColor:
                                                plantillaStyles.colorFondo,
                                            color: plantillaStyles.colorTexto,
                                        }}
                                    >
                                        <ShowMoreButtonContainer>
                                            SEE MORE{' '}
                                            <FaChevronRight
                                                style={{
                                                    marginLeft: '5px',
                                                    color: plantillaStyles.colorTexto,
                                                }}
                                            />
                                        </ShowMoreButtonContainer>
                                    </button>
                                </Link>
                            </div>
                        </TituloDestacadoContainer>
                        <div className="clearfix" />
                        <hr />
                    </div>
                    <RenderIf isTrue={display === 'grid'}>
                        <GridProducts products={products} />
                    </RenderIf>
                    <RenderIf isTrue={display === 'list'}>
                        <ListProducts products={products} />
                    </RenderIf>
                </div>
            </div>
        </>
    );
};

export default Products;
