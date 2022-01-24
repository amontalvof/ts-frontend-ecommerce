// import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TStyle } from '../../interfaces/plantilla';
import {
    BarraSuperior,
    // StyledIconsUl,
    // StyledIconsLi,
    StyledLinkUl,
    StyledLinkLi,
} from './styles';

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
        <BarraSuperior id="top" style={barraSuperiorStyles}>
            <div className="container">
                <div className="row">
                    {/* SOCIAL */}
                    <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
                        {/* <StyledIconsUl>
                            {redesSocialesParsed.map((item: ISocialNetwork) => {
                                const Icon = iconsMap[item.red];
                                return (
                                    <StyledIconsLi key={item.red}>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Icon
                                                className={`redSocial ${item.estilo}`}
                                            />
                                        </a>
                                    </StyledIconsLi>
                                );
                            })}
                        </StyledIconsUl> */}
                    </div>
                    {/* SIGN IN */}
                    <div
                        className="col-lg-3 col-md-3 col-sm-4 col-xs-12"
                        id="registro"
                    >
                        <StyledLinkUl>
                            <StyledLinkLi>
                                <Link
                                    to="modalIngreso"
                                    data-toggle="modal"
                                    style={linkStyles}
                                >
                                    Sign in
                                </Link>
                            </StyledLinkLi>
                            <StyledLinkLi>|</StyledLinkLi>
                            <StyledLinkLi>
                                <Link
                                    to="modalRegistro"
                                    data-toggle="modal"
                                    style={linkStyles}
                                >
                                    Create an account
                                </Link>
                            </StyledLinkLi>
                        </StyledLinkUl>
                    </div>
                </div>
            </div>
        </BarraSuperior>
    );
};

export default Top;
