import { FaSearch, FaBars } from 'react-icons/fa';

const Search = () => {
    return (
        <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12">
            {/* CATEGORIES BUTTON */}
            <div
                className="col-lg-4 col-md-4 col-sm-4 col-xs-12 backColor"
                id="btnCategorias"
            >
                <p>
                    CATEGORIES
                    <span className="pull-right">
                        <FaBars />
                    </span>
                </p>
            </div>
            {/* SEARCH */}
            <div
                className="input-group col-lg-8 col-md-8 col-sm-8 col-xs-12"
                id="buscador"
            >
                <input
                    type="search"
                    name="buscar"
                    className="form-control"
                    placeholder="Buscar..."
                />
                <span className="input-group-btn">
                    <a href="#">
                        <button
                            className="btn btn-default backColor"
                            type="submit"
                        >
                            <FaSearch />
                        </button>
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Search;
