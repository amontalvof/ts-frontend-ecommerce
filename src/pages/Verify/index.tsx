import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RenderIf from '../../components/RenderIf';
import Spinner from '../../components/Spinner';
import { baseUrl } from '../../constants';
import { fetchWithoutToken } from '../../helpers/fetch';
import useFetch from '../../hooks/useFetch';
import { openAuthModal } from '../../redux/actions';
import { RootStore } from '../../redux/store';
import { SpinnerContainer, VerifyContainer } from './styles';

interface IUseParams {
    hash?: string;
}

const Verify = () => {
    const dispatch = useDispatch();
    const [isVerifiedUser, setIsVerifiedUser] = useState(false);
    const [loadingUpdateUser, setLoadingUpdateUser] = useState<boolean>(false);
    const state = useSelector((state: RootStore) => state);
    const { plantillaReducer } = state;
    const { loading: loadingStyles, styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];

    const { hash } = useParams<IUseParams>();

    const { loading: loadingRedUser, value: valueRedUser = {} } = useFetch(
        `${baseUrl}/user`,
        {
            body: JSON.stringify({
                valor: hash,
                item: 'emailEncriptado',
            }),
            method: 'POST',
        }
    );

    useEffect(() => {
        if (valueRedUser?.ok) {
            (async () => {
                try {
                    setLoadingUpdateUser(true);
                    const response = await fetchWithoutToken(
                        `user/${valueRedUser?.user?.id}`,
                        { verificacion: 0 },
                        'PUT'
                    );
                    const json = await response.json();
                    if (json?.ok) setIsVerifiedUser(true);
                    setLoadingUpdateUser(false);
                } catch (error) {
                    console.error(error);
                    setLoadingUpdateUser(false);
                }
            })();
        }
    }, [valueRedUser]);

    const handleButtonClick = (value: string) => {
        dispatch(openAuthModal(value));
    };

    if (loadingStyles || loadingRedUser || loadingUpdateUser) {
        return (
            <SpinnerContainer>
                <Spinner
                    plantillaStyles={plantillaStyles}
                    size={15}
                    margin={2}
                    defaultColor="#47bac1"
                    text={
                        <h1
                            style={{
                                color: plantillaStyles?.colorFondo || '#47bac1',
                            }}
                        >
                            Loading...
                        </h1>
                    }
                />
            </SpinnerContainer>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <VerifyContainer className="col-xs-12 text-center">
                    <RenderIf isTrue={isVerifiedUser}>
                        <>
                            <h1>Thanks</h1>
                            <h2>
                                <small>
                                    We have verified your email, you can now
                                    enter the system.
                                </small>
                            </h2>
                            <br />
                            <button
                                className="btn btn-default backColor btn-lg"
                                style={{ outline: 'none' }}
                                onClick={() => handleButtonClick('login')}
                            >
                                LOGIN
                            </button>
                        </>
                    </RenderIf>
                    <RenderIf isTrue={!isVerifiedUser}>
                        <>
                            <h1>Error</h1>
                            <h2>
                                <small>
                                    Unable to verify email, please register
                                    again.
                                </small>
                            </h2>
                            <br />
                            <button
                                className="btn btn-default backColor btn-lg"
                                style={{ outline: 'none' }}
                                onClick={() => handleButtonClick('register')}
                            >
                                REGISTER
                            </button>
                        </>
                    </RenderIf>
                </VerifyContainer>
            </div>
        </div>
    );
};

export default Verify;
