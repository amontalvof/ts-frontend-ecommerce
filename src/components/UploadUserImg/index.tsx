import MaleUserAvatar from '../../assets/maleUserAvatar';
import RenderIf from '../RenderIf';
import { StyledUserImg } from './styles';

interface IUploadUserImgProps {
    foto?: string;
    colorfondo?: string;
    modo?: string;
}

const UploadUserImg = ({ foto, colorfondo, modo }: IUploadUserImgProps) => {
    return (
        <form>
            <div className="col-md-3 col-sm-4 col-xs-12 text-center">
                <br />
                <figure id="imgPerfil">
                    <RenderIf isTrue={!!foto}>
                        <StyledUserImg
                            className="img-thumbnail"
                            src={foto}
                            referrerPolicy="no-referrer"
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
        </form>
    );
};

export default UploadUserImg;
