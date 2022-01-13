import { Dispatch, SetStateAction } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import './styles.scss';

interface ISearchProps {
    handleHideCategories: Dispatch<SetStateAction<boolean>>;
}

const Search = ({ handleHideCategories }: ISearchProps) => {
    const { styles } = useSelector(
        (state: RootStore) => state.plantillaReducer
    );
    const plantillaStyles = styles && styles[0];

    const searchStyles = {
        backgroundColor: plantillaStyles?.colorFondo,
        color: plantillaStyles?.colorTexto,
    };

    const handleBtnCategoriesClick = () => {
        handleHideCategories((c) => !c);
    };

    return (
        <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12">
            {/* CATEGORIES BUTTON */}
            <div
                className="col-lg-4 col-md-4 col-sm-4 col-xs-12 backColor"
                id="btnCategorias"
                onClick={handleBtnCategoriesClick}
                style={searchStyles}
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
                    name="search"
                    className="form-control"
                    placeholder="Search..."
                />
                <span className="input-group-btn">
                    <a href="#">
                        <button
                            className="btn btn-default backColor"
                            type="submit"
                            style={searchStyles}
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
