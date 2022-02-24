import { Dispatch, SetStateAction, useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import useRenderCount from '../../hooks/useRenderCount';
import { RootStore } from '../../redux/store';
import { BtnCategorias, Buscador } from './styles';

interface ISearchProps {
    handleHideCategories: Dispatch<SetStateAction<boolean>>;
}

const Search = ({ handleHideCategories }: ISearchProps) => {
    const renderCount = useRenderCount();
    const [internalSearchValue, setInternalSearchValue] = useState('');
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
        setInternalSearchValue(event.target.value);
        // dispatch({
        //     type: 'TRIGGER_SEARCH',
        //     payload: event.target.value,
        // });
    };

    console.log(renderCount);

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
