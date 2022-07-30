import { Dispatch, SetStateAction, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootStore } from '../../redux/store';
import SearchButton from './searchButton';
import { BtnCategorias, Buscador } from './styles';

interface ISearchProps {
    handleHideCategories: Dispatch<SetStateAction<boolean>>;
}
const regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ_ ]*$/;

export const Search = ({ handleHideCategories }: ISearchProps) => {
    const history = useHistory();
    const [internalSearchValue, setInternalSearchValue] = useState('');
    const dispatch = useDispatch();
    const state = useSelector((state: RootStore) => state);
    const { plantillaReducer } = state;
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];

    const searchStyles = {
        backgroundColor: plantillaStyles?.colorFondo,
        color: plantillaStyles?.colorTexto,
    };

    const isInputSearchValueNotEmpty = internalSearchValue !== '';

    const handleBtnCategoriesClick = () => {
        handleHideCategories((c) => !c);
    };

    const routeSearch = internalSearchValue
        .replace(/[áéíóúÁÉÍÓÚ ]/g, '_')
        .toLowerCase();

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputSearchValue = event.target.value;
        if (!regex.test(inputSearchValue)) {
            setInternalSearchValue('');
        } else {
            setInternalSearchValue(inputSearchValue);
        }
    };

    const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (
            (event.code === 'Enter' || event.code === 'NumpadEnter') &&
            isInputSearchValueNotEmpty
        ) {
            dispatch({
                type: 'TRIGGER_SEARCH',
                payload: internalSearchValue,
            });
            history.push(`/search/${routeSearch}?page=1`);
            setInternalSearchValue('');
        }
    };

    const handleClick = () => {
        if (isInputSearchValueNotEmpty) {
            dispatch({
                type: 'TRIGGER_SEARCH',
                payload: internalSearchValue,
            });
            setInternalSearchValue('');
        }
    };

    return (
        <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12">
            <BtnCategorias
                className="col-lg-4 col-md-4 col-sm-4 col-xs-12"
                onClick={handleBtnCategoriesClick}
                style={searchStyles}
            >
                <span>CATEGORIES</span>
                <FaBars />
            </BtnCategorias>
            <Buscador className="input-group col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <input
                    type="search"
                    name="search"
                    className="form-control"
                    placeholder="Search..."
                    value={internalSearchValue}
                    onChange={handleSearch}
                    onKeyDown={handleEnter}
                />
                <span className="input-group-btn">
                    <SearchButton
                        isInputSearchValueNotEmpty={isInputSearchValueNotEmpty}
                        routeSearch={routeSearch}
                        searchStyles={searchStyles}
                        onClick={handleClick}
                    />
                </span>
            </Buscador>
        </div>
    );
};
