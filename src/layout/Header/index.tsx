import { useRef, useState, MutableRefObject } from 'react';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { CategoriesList, Logo } from '../../components';
import Search from '../../components/Search';
import ShoppingCart from '../../components/ShoppingCart';
import useClickOutside from '../../hooks/useClickOutside';
import { RootStore } from '../../redux/store';
import { CategoriasContainer } from './styles';

const Header = () => {
    const [hideCategories, setHideCategories] = useState(true);
    const { plantillaReducer, categoriesReducer, subCategoriesReducer } =
        useSelector((state: RootStore) => state);
    const categoriesRef = useRef() as MutableRefObject<HTMLDivElement>;

    useClickOutside(categoriesRef, () => {
        if (!hideCategories) setHideCategories(true);
    });

    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];
    const categoriesStyles = {
        backgroundColor: plantillaStyles?.colorFondo,
    };

    const { categories = [] } = categoriesReducer;

    return (
        <header>
            <div className="container">
                <div className="row">
                    <Logo />
                    <Search handleHideCategories={setHideCategories} />
                    <ShoppingCart />
                </div>
                <CategoriasContainer
                    className="col-xs-12"
                    hideCategories={hideCategories}
                    style={categoriesStyles}
                    ref={categoriesRef}
                >
                    {categories.map((item) => (
                        <CategoriesList
                            key={nanoid(10)}
                            id={item.id}
                            category={item.categoria}
                            to={item.ruta}
                            plantillaStyles={plantillaStyles}
                            subCategories={subCategoriesReducer.subCategories}
                            onRequestClose={setHideCategories}
                        />
                    ))}
                </CategoriasContainer>
            </div>
        </header>
    );
};

export default Header;
