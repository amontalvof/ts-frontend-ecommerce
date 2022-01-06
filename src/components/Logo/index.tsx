import { Link } from 'react-router-dom';
import './styles.scss';

const Logo = () => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-2 col-xs-12" id="logotipo">
            <Link to="/">
                <img
                    src="https://res.cloudinary.com/a03m02f92/image/upload/v1641354908/ecommerce/plantilla/logo_wq3nhv.png"
                    className="img-responsive"
                    alt="logo"
                />
            </Link>
        </div>
    );
};

export default Logo;
