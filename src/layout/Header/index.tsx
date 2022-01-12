import { useState } from 'react';
import { useSelector } from 'react-redux';
import Categories from '../../components/Categories';
import Logo from '../../components/Logo';
import Search from '../../components/Search';
import ShoppingCart from '../../components/ShoppingCart';
import { RootStore } from '../../redux/store';
import './styles.scss';

const Header = () => {
    const { styles } = useSelector(
        (state: RootStore) => state.plantillaReducer
    );
    const [hideCategories, setHideCategories] = useState(true);
    const classHideCategories = hideCategories
        ? 'hideCategories'
        : 'showCategories';

    const plantillaStyles = styles && styles[0];
    const categoriesStyles = {
        backgroundColor: plantillaStyles?.colorFondo,
    };

    return (
        <div>
            <header className="container-fluid">
                <div className="container">
                    <div className="row" id="cabezote">
                        <Logo />
                        <Search handleHideCategories={setHideCategories} />
                        <ShoppingCart />
                    </div>
                    <div
                        className={`col-xs-12 backColor ${classHideCategories}`}
                        id="categorias"
                        style={categoriesStyles}
                    >
                        <Categories plantillaStyles={plantillaStyles} />
                        <Categories plantillaStyles={plantillaStyles} />
                        <Categories plantillaStyles={plantillaStyles} />
                        <Categories plantillaStyles={plantillaStyles} />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;