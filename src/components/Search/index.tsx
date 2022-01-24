import { Dispatch, SetStateAction } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import { BtnCategorias, Buscador } from './styles';

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
            <BtnCategorias
                className="col-lg-4 col-md-4 col-sm-4 col-xs-12 backColor"
                onClick={handleBtnCategoriesClick}
                style={searchStyles}
            >
                <p>
                    CATEGORIES
                    <span className="pull-right">
                        <FaBars />
                    </span>
                </p>
            </BtnCategorias>
            {/* SEARCH */}
            <Buscador className="input-group col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <input
                    type="search"
                    name="search"
                    className="form-control"
                    placeholder="Search..."
                />
                <span className="input-group-btn">
                    <button
                        className="btn btn-default backColor"
                        style={{ ...searchStyles, outline: 'none' }}
                    >
                        <FaSearch />
                    </button>
                </span>
            </Buscador>
        </div>
    );
};

export default Search;
