import { FaChevronRight } from 'react-icons/fa';
import DisplayGridListBar from '../DisplayGridListBar';
import GridProducts from '../GridProducts';
import './styles.scss';

interface IProductsProps {
    title: string;
}

const Products = ({ title }: IProductsProps) => {
    return (
        <>
            <DisplayGridListBar />
            <div className="container-fluid productos">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 tituloDestacado">
                            <div className="col-sm-6 col-xs-12">
                                <h1>
                                    <small>{title}</small>
                                </h1>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                                <a href="see-more">
                                    <button className="btn btn-default backColor pull-right">
                                        <div className="showMoreButtonContainer">
                                            SEE MORE{' '}
                                            <FaChevronRight
                                                style={{ marginLeft: '5px' }}
                                            />
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </div>
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
