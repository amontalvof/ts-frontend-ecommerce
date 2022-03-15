// import { nanoid } from 'nanoid';
// import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import AuthModal from '../../components/AuthModal';
import { TStyle } from '../../interfaces/plantilla';
import { openAuthModal } from '../../redux/actions';
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
    const dispatch = useDispatch();
    const { barraSuperior, /*redesSociales,*/ textoSuperior } =
        plantillaStyles as TStyle;

    const barraSuperiorStyles = {
        backgroundColor: barraSuperior,
    };

    const buttonStyles = {
        color: textoSuperior,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    };

    const dividerStyles = {
        color: textoSuperior,
    };

    const handleButtonClick = (value: string) => {
        dispatch(openAuthModal(value));
    };

    // const redesSocialesParsed = JSON.parse(redesSociales);

    return (
        <BarraSuperior style={barraSuperiorStyles}>
            <div className="container">
                <div className="row">
                    {/* SOCIAL */}
                    <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
                        {/* <StyledIconsUl>
                            {redesSocialesParsed.map((item: ISocialNetwork) => {
                                const Icon = iconsMap[item.red];
                                return (
                                    <StyledIconsLi key={nanoid(10)}>
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
                    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                        <StyledLinkUl>
                            <StyledLinkLi>
                                <button
                                    style={buttonStyles}
                                    onClick={() => handleButtonClick('login')}
                                >
                                    Login
                                </button>
                            </StyledLinkLi>
                            <StyledLinkLi style={dividerStyles}>|</StyledLinkLi>
                            <StyledLinkLi
                                onClick={() => handleButtonClick('register')}
                            >
                                <button style={buttonStyles}>Register</button>
                            </StyledLinkLi>
                        </StyledLinkUl>
                    </div>
                </div>
            </div>
            <AuthModal />
        </BarraSuperior>
    );
};

export default Top;
