import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaSpinner, FaFileUpload } from 'react-icons/fa';
import MaleUserAvatar from '../../assets/maleUserAvatar';
import { startUploadUserImage } from '../../redux/actions/userActions';
import RenderIf from '../RenderIf';
import {
    ButtonTextContainer,
    HiddenInput,
    LoadingContainer,
    StyledUserImg,
} from './styles';

interface IUploadUserImgProps {
    uid?: number;
    foto?: string;
    colorfondo?: string;
    modo?: string;
}

const UploadUserImg = ({
    uid,
    foto,
    colorfondo,
    modo,
}: IUploadUserImgProps) => {
    const [loadingImage, setLoadingImage] = useState(false);
    const dispatch = useDispatch();

    const upload = () => {
        (document.getElementById('selectImage') as HTMLElement).click();
    };

    const fileSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const image = (event.target.files || [])[0];
        const formData = new FormData();
        formData.append('sampleFile', image);
        setLoadingImage(true);
        dispatch(startUploadUserImage({ formData, uid, setLoadingImage }));
        (document.getElementById('selectImage') as HTMLInputElement).value = '';
    };

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
                            style={{
                                width: '80%',
                                height: '80%',
                            }}
                            className="img-thumbnail"
                        />
                    </RenderIf>
                </figure>
                <RenderIf isTrue={loadingImage}>
                    <>
                        <LoadingContainer>
                            <FaSpinner style={{ marginRight: '5px' }} />
                            Loading
                        </LoadingContainer>
                    </>
                </RenderIf>
                <RenderIf isTrue={modo === 'directo'}>
                    <>
                        <button
                            type="button"
                            style={{ outline: 'none', marginBottom: '10px' }}
                            className="btn btn-default"
                            id="btnCambiarFoto"
                            onClick={upload}
                        >
                            <ButtonTextContainer>
                                <FaFileUpload style={{ marginRight: '5px' }} />
                                Change profile picture
                            </ButtonTextContainer>
                        </button>
                        <HiddenInput
                            id="selectImage"
                            type="file"
                            onChange={fileSelectHandler}
                        />
                    </>
                </RenderIf>
            </div>
        </form>
    );
};

export default UploadUserImg;
