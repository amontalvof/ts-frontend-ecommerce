import UpdatePassword from '../../components/UpdatePassword';
import UploadUserImg from '../../components/UploadUserImg';
import { IUserInfo } from '../../interfaces/user';

interface IEditProfileProps extends IUserInfo {
    colorfondo?: string;
    colortexto?: string;
}

const EditProfile = ({
    colorfondo,
    colortexto,
    uid,
    name,
    modo,
    foto,
    email,
}: IEditProfileProps) => {
    return (
        <div className="row">
            <UploadUserImg colorfondo={colorfondo} foto={foto} modo={modo} />
            <UpdatePassword
                uid={uid}
                modo={modo}
                name={name}
                email={email}
                colorfondo={colorfondo}
                colortexto={colortexto}
            />
        </div>
    );
};

export default EditProfile;
