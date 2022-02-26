import { Dispatch, SetStateAction, useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { RootStore } from '../../redux/store';
import { BtnCategorias, Buscador } from './styles';

interface ISearchProps {
    handleHideCategories: Dispatch<SetStateAction<boolean>>;
}
const regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚ ]*$/;

const Search = ({ handleHideCategories }: ISearchProps) => {
    const history = useHistory();
    const [internalSearchValue, setInternalSearchValue] = useState('');
    const [routeSearch, setRouteSearch] = useState('');
    const dispatch = useDispatch();
    const state = useSelector((state: RootStore) => state);
    const { plantillaReducer, searchReducer } = state;
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];
    const { searchValue } = searchReducer;
    const searchStyles = {
        backgroundColor: plantillaStyles?.colorFondo,
        color: plantillaStyles?.colorTexto,
    };

    const handleBtnCategoriesClick = () => {
        handleHideCategories((c) => !c);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputSearchValue = event.target.value;
        if (!regex.test(inputSearchValue)) {
            setInternalSearchValue('');
        } else {
            setInternalSearchValue(inputSearchValue);
            const evaluateSearch = inputSearchValue
                .replace(/[áéíóúÁÉÍÓÚ ]/g, '-')
                .toLowerCase();
            setRouteSearch(evaluateSearch);
        }
        // dispatch({
        //     type: 'TRIGGER_SEARCH',
        //     payload: event.target.value,
        // });
    };

    const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
            history.push(`/search/${routeSearch}?page=1`);
        }
    };

    return (
        <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12">
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
            <Buscador className="input-group col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <input
                    type="search"
                    name="search"
                    className="form-control"
                    placeholder="Search..."
                    // value={searchValue}
                    value={internalSearchValue}
                    onChange={handleSearch}
                    onKeyDown={handleEnter}
                />
                <span className="input-group-btn">
                    <Link to={`/search/${routeSearch}?page=1`}>
                        <button
                            className="btn btn-default backColor"
                            style={{ ...searchStyles, outline: 'none' }}
                        >
                            <FaSearch />
                        </button>
                    </Link>
                </span>
            </Buscador>
        </div>
    );
};

export default Search;
