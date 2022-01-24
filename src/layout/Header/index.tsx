import { useState } from 'react';
import { useSelector } from 'react-redux';
import CategoriesList from '../../components/CategoriesList';
import Logo from '../../components/Logo';
import Search from '../../components/Search';
import ShoppingCart from '../../components/ShoppingCart';
import { RootStore } from '../../redux/store';
import { CategoriasContainer } from './styles';

const Header = () => {
    const [hideCategories, setHideCategories] = useState(true);
    const { plantillaReducer, categoriesReducer, subCategoriesReducer } =
        useSelector((state: RootStore) => state);

    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];
    const categoriesStyles = {
        backgroundColor: plantillaStyles?.colorFondo,
    };

    const { categories = [] } = categoriesReducer;

    return (
        <header className="container-fluid">
            <div className="container">
                <div className="row">
                    <Logo />
                    <Search handleHideCategories={setHideCategories} />
                    <ShoppingCart />
                </div>
                <CategoriasContainer
                    className="col-xs-12 backColor"
                    hideCategories={hideCategories}
                    style={categoriesStyles}
                >
                    {categories.map((item) => (
                        <CategoriesList
                            key={item.id}
                            id={item.id}
                            category={item.categoria}
                            to={item.ruta}
                            plantillaStyles={plantillaStyles}
                            subCategories={subCategoriesReducer.subCategories}
                        />
                    ))}
                </CategoriasContainer>
            </div>
        </header>
    );
};

export default Header;
