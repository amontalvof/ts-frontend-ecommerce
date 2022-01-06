import Categories from '../../components/Categories';
import Logo from '../../components/Logo';
import Search from '../../components/Search';
import ShoppingCart from '../../components/ShoppingCart';
import './styles.scss';

const Header = () => {
    return (
        <div>
            <header className="container-fluid">
                <div className="container">
                    <div className="row" id="cabezote">
                        <Logo />
                        <Search />
                        <ShoppingCart />
                    </div>
                    <div className="col-xs-12 backColor" id="categorias">
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
