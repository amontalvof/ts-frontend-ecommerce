import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootStore } from '../../redux/store';
import { LogoContainer } from './styles';

export const Logo = () => {
    const { styles } = useSelector(
        (state: RootStore) => state.plantillaReducer
    );
    const plantillaStyles = styles && styles[0];

    return (
        <LogoContainer className="col-lg-3 col-md-3 col-sm-2 col-xs-12">
            <Link to="/">
                <img
                    src={plantillaStyles?.logo}
                    className="img-responsive"
                    alt="logo"
                />
            </Link>
        </LogoContainer>
    );
};
