import { useState } from 'react';
import Categories from '../../components/Categories';
import Logo from '../../components/Logo';
import Search from '../../components/Search';
import ShoppingCart from '../../components/ShoppingCart';
import './styles.scss';

const Header = () => {
    const [hideCategories, setHideCategories] = useState(true);
    const classHideCategories = hideCategories
        ? 'hideCategories'
        : 'showCategories';

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
                    >
                        <Categories />
                        <Categories />
                        <Categories />
                        <Categories />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
