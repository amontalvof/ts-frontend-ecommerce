import { FaGoogle } from 'react-icons/fa';
import MaleUserAvatar from '../../assets/maleUserAvatar';
import RenderIf from '../../components/RenderIf';
import { IUserInfo } from '../../interfaces/user';
import { StyledUserImg, StyledButton } from './styles';

interface IEditProfileProps extends IUserInfo {
    colorfondo?: string;
    colortexto?: string;
}

const EditProfile = ({
    colorfondo,
    colortexto,
    checking,
    uid,
    name,
    modo,
    foto,
    email,
}: IEditProfileProps) => {
    return (
        <div className="row">
            <form method="post" encType="multipart/form-data">
                <div className="col-md-3 col-sm-4 col-xs-12 text-center">
                    <br />
                    <figure id="imgPerfil">
                        <RenderIf isTrue={!!foto}>
                            <StyledUserImg
                                className="img-thumbnail"
                                src={foto}
                                alt="user"
                            />
                        </RenderIf>
                        <RenderIf isTrue={!foto}>
                            <MaleUserAvatar
                                color={colorfondo}
                                style={{ width: '80%', height: '80%' }}
                                className="img-thumbnail"
                            />
                        </RenderIf>
                    </figure>
                    <RenderIf isTrue={modo === 'directo'}>
                        <button
                            type="button"
                            style={{ outline: 'none' }}
                            className="btn btn-default"
                            id="btnCambiarFoto"
                        >
                            Change profile picture
                        </button>
                    </RenderIf>
                </div>
                <div className="col-md-9 col-sm-8 col-xs-12">
                    <br />
                    <RenderIf isTrue={modo !== 'directo'}>
                        <div>
                            <label className="control-label text-muted text-uppercase">
                                Name:
                            </label>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-user" />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    readOnly
                                    value={name}
                                />
                            </div>
                            <br />
                            <label className="control-label text-muted text-uppercase">
                                Email:
                            </label>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-envelope" />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    readOnly
                                    value={email}
                                />
                            </div>
                            <br />
                            <label className="control-label text-muted text-uppercase">
                                System registration mode:
                            </label>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <FaGoogle />
                                </span>
                                <input
                                    type="text"
                                    className="form-control text-uppercase"
                                    value={modo}
                                    readOnly
                                />
                            </div>
                            <br />
                            <button
                                style={{ outline: 'none' }}
                                type="button"
                                className="btn btn-danger btn-md pull-right"
                            >
                                Delete account
                            </button>
                        </div>
                    </RenderIf>
                    <RenderIf isTrue={modo === 'directo'}>
                        <div>
                            <label
                                className="control-label text-muted text-uppercase"
                                htmlFor="editarNombre"
                            >
                                Name:
                            </label>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-user" />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="editarNombre"
                                    name="editarNombre"
                                    value={name}
                                    readOnly
                                />
                            </div>
                            <br />
                            <label
                                className="control-label text-muted text-uppercase"
                                htmlFor="editarEmail"
                            >
                                Email:
                            </label>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-envelope" />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="editarEmail"
                                    name="editarEmail"
                                    value={email}
                                    readOnly
                                />
                            </div>
                            <br />
                            <label
                                className="control-label text-muted text-uppercase"
                                htmlFor="editarPassword"
                            >
                                Change Password:
                            </label>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-lock" />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="editarPassword"
                                    name="editarPassword"
                                />
                            </div>
                            <br />
                            <label
                                className="control-label text-muted text-uppercase"
                                htmlFor="editarPassword"
                            >
                                Confirm Password:
                            </label>
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-lock" />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="editarPassword"
                                    name="editarPassword"
                                />
                            </div>
                            <br />
                            <StyledButton
                                colorfondo={colorfondo}
                                colortexto={colortexto}
                                type="button"
                                style={{ outline: 'none' }}
                                className="btn btn-default backColor btn-md pull-left"
                            >
                                Update password
                            </StyledButton>
                            <button
                                style={{ outline: 'none' }}
                                type="button"
                                className="btn btn-danger btn-md pull-right"
                            >
                                Delete account
                            </button>
                        </div>
                    </RenderIf>
                </div>
            </form>
        </div>
    );
};

export default EditProfile;
