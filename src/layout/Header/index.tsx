import { useState } from 'react';
import { useSelector } from 'react-redux';
import Categories from '../../components/Categories';
import Logo from '../../components/Logo';
import Search from '../../components/Search';
import ShoppingCart from '../../components/ShoppingCart';
import { RootStore } from '../../redux/store';
import './styles.scss';

const Header = () => {
    const [hideCategories, setHideCategories] = useState(true);
    const { plantillaReducer, categoriesReducer } = useSelector(
        (state: RootStore) => state
    );

    const classHideCategories = hideCategories
        ? 'hideCategories'
        : 'showCategories';

    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];
    const categoriesStyles = {
        backgroundColor: plantillaStyles?.colorFondo,
    };

    const { categories = [] } = categoriesReducer;

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
                        {categories.map((item) => (
                            <Categories
                                key={item.id}
                                id={item.id}
                                category={item.categoria}
                                to={item.ruta}
                                plantillaStyles={plantillaStyles}
                            />
                        ))}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
