import MaleUserAvatar from '../../assets/maleUserAvatar';
import RenderIf from '../../components/RenderIf';
import { IUserInfo } from '../../interfaces/user';

interface IEditProfileProps extends IUserInfo {
    color?: string;
}

const EditProfile = ({
    color,
    checking,
    uid,
    name,
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
                            <img className="img-circle" src={foto} alt="user" />
                        </RenderIf>
                        <RenderIf isTrue={!foto}>
                            <MaleUserAvatar
                                color={color}
                                width="50"
                                height="50"
                            />
                        </RenderIf>
                    </figure>
                </div>
                <div className="col-md-9 col-sm-8 col-xs-12"></div>
            </form>
        </div>
    );
};

export default EditProfile;
