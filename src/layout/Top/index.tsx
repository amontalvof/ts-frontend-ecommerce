import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import './styles.scss';

const Top = () => {
    return (
        <div className="container-fluid barraSuperior" id="top">
            <div className="container">
                <div className="row">
                    {/* SOCIAL */}
                    <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
                        <ul>
                            <li>
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaFacebookF className="redSocial facebookBlanco" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaInstagram className="redSocial instagramBlanco" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* SIGN IN */}
                    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 registro">
                        <ul>
                            <li>
                                <a href="#modalIngreso" data-toggle="modal">
                                    Sign in
                                </a>
                            </li>
                            <li>|</li>
                            <li>
                                <a href="#modalRegistro" data-toggle="modal">
                                    Create an account
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;
