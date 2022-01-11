// import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { TStyle } from '../../interfaces/plantilla';
import './styles.scss';

interface ITopProps {
    plantillaStyles?: TStyle;
}

// interface ISocialNetwork {
//     estilo: string;
//     red: string;
//     url: string;
// }

// interface IIcons {
//     [key: string]: Function;
// }

// const iconsMap: IIcons = {
//     FaFacebookF: FaFacebookF,
//     FaInstagram: FaInstagram,
// };

const Top = ({ plantillaStyles }: ITopProps) => {
    const { barraSuperior, /*redesSociales,*/ textoSuperior } =
        plantillaStyles as TStyle;

    const barraSuperiorStyles = {
        backgroundColor: barraSuperior,
    };

    const linkStyles = {
        color: textoSuperior,
    };

    // const redesSocialesParsed = JSON.parse(redesSociales);

    return (
        <div
            className="container-fluid barraSuperior"
            id="top"
            style={barraSuperiorStyles}
        >
            <div className="container">
                <div className="row">
                    {/* SOCIAL */}
                    <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
                        {/* <ul>
                            {redesSocialesParsed.map((item: ISocialNetwork) => {
                                const Icon = iconsMap[item.red];
                                return (
                                    <li key={item.red}>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Icon
                                                className={`redSocial ${item.estilo}`}
                                            />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul> */}
                    </div>
                    {/* SIGN IN */}
                    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 registro">
                        <ul>
                            <li>
                                <a
                                    href="#modalIngreso"
                                    data-toggle="modal"
                                    style={linkStyles}
                                >
                                    Sign in
                                </a>
                            </li>
                            <li>|</li>
                            <li>
                                <a
                                    href="#modalRegistro"
                                    data-toggle="modal"
                                    style={linkStyles}
                                >
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
