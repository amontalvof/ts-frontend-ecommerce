// import { nanoid } from 'nanoid';
// import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MaleUserAvatar from '../../assets/maleUserAvatar';
import AuthModal from '../../components/AuthModal';
import RenderIf from '../../components/RenderIf';
import { TStyle } from '../../interfaces/plantilla';
import { IUserInfo } from '../../interfaces/user';
import { openAuthModal } from '../../redux/actions';
import { startLogout } from '../../redux/actions/authModalActions';
import {
    BarraSuperior,
    // StyledIconsUl,
    // StyledIconsLi,
    StyledLinkUl,
    StyledLinkLi,
    AvatarContainer,
} from './styles';

interface ITopProps {
    plantillaStyles?: TStyle;
    userInfo?: IUserInfo;
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

const Top = ({ plantillaStyles, userInfo = {} }: ITopProps) => {
    const { uid, foto } = userInfo;
    const history = useHistory();
    const dispatch = useDispatch();
    const { barraSuperior, /*redesSociales,*/ textoSuperior, colorFondo } =
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

    const handleLogout = () => {
        dispatch(startLogout());
    };

    const handleProfileClick = () => {
        history.push(`/profile/${uid}`);
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
                            <RenderIf isTrue={!!uid}>
                                <>
                                    <StyledLinkLi>
                                        <RenderIf isTrue={!!foto}>
                                            <img
                                                className="img-circle"
                                                src={foto}
                                                width="25"
                                                alt="user"
                                            />
                                        </RenderIf>
                                        <RenderIf isTrue={!foto}>
                                            <AvatarContainer>
                                                <MaleUserAvatar
                                                    color={colorFondo}
                                                    width="25"
                                                    height="25"
                                                />
                                            </AvatarContainer>
                                        </RenderIf>
                                    </StyledLinkLi>
                                    <StyledLinkLi style={dividerStyles}>
                                        |
                                    </StyledLinkLi>
                                    <StyledLinkLi>
                                        <button
                                            style={buttonStyles}
                                            onClick={handleProfileClick}
                                        >
                                            Profile
                                        </button>
                                    </StyledLinkLi>
                                    <StyledLinkLi style={dividerStyles}>
                                        |
                                    </StyledLinkLi>
                                    <StyledLinkLi onClick={handleLogout}>
                                        <button style={buttonStyles}>
                                            Logout
                                        </button>
                                    </StyledLinkLi>
                                </>
                            </RenderIf>
                            <RenderIf isTrue={!userInfo?.uid}>
                                <>
                                    <StyledLinkLi>
                                        <button
                                            style={buttonStyles}
                                            onClick={() =>
                                                handleButtonClick('login')
                                            }
                                        >
                                            Login
                                        </button>
                                    </StyledLinkLi>
                                    <StyledLinkLi style={dividerStyles}>
                                        |
                                    </StyledLinkLi>
                                    <StyledLinkLi
                                        onClick={() =>
                                            handleButtonClick('register')
                                        }
                                    >
                                        <button style={buttonStyles}>
                                            Register
                                        </button>
                                    </StyledLinkLi>
                                </>
                            </RenderIf>
                        </StyledLinkUl>
                    </div>
                </div>
            </div>
            <AuthModal />
        </BarraSuperior>
    );
};

export default Top;
