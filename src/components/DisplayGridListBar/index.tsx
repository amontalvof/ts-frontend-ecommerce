import { FaTh, FaList } from 'react-icons/fa';
import './styles.scss';

const DisplayGridListBar = () => {
    return (
        <div className="container-fluid well well-sm barraProductos">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 organizarProductos">
                        <div className="btn-group pull-right">
                            <button
                                type="button"
                                className="btn btn-default btnGrid"
                                id="btnGrid0"
                            >
                                <div className="IconTextContainer">
                                    <FaTh />
                                    <span className="col-xs-0 pull-right">
                                        {' '}
                                        GRID
                                    </span>
                                </div>
                            </button>
                            <button
                                type="button"
                                className="btn btn-default btnList"
                                id="btnList0"
                            >
                                <div className="IconTextContainer">
                                    <FaList />
                                    <span className="col-xs-0 pull-right">
                                        {' '}
                                        LIST
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayGridListBar;
