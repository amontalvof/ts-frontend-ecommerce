import { FaChevronRight } from 'react-icons/fa';
import DisplayGridListBar from '../DisplayGridListBar';
import GridProducts from '../GridProducts';
import { ShowMoreButtonContainer, TituloDestacadoContainer } from './styles';

interface IProductsProps {
    title: string;
}

const Products = ({ title }: IProductsProps) => {
    return (
        <>
            <DisplayGridListBar />
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
                                <a href="see-more">
                                    <button className="btn btn-default backColor pull-right">
                                        <ShowMoreButtonContainer>
                                            SEE MORE{' '}
                                            <FaChevronRight
                                                style={{ marginLeft: '5px' }}
                                            />
                                        </ShowMoreButtonContainer>
                                    </button>
                                </a>
                            </div>
                        </TituloDestacadoContainer>
                        <div className="clearfix" />
                        <hr />
                    </div>
                    <GridProducts />
                </div>
            </div>
        </>
    );
};

export default Products;
