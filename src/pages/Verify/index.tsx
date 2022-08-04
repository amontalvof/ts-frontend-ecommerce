import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RenderIf, Spinner } from '../../components';
import { defaultBrand } from '../../constants';
import useReadUnverifiedUser from '../../hooks/useReadUnverifiedUser';
import useUpdateUnverifiedUser from '../../hooks/useUpdateUnverifiedUser';
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

    const { isLoading: loadingRedUser, data: valueRedUser = {} } =
        useReadUnverifiedUser('user', {
            valor: hash,
            item: 'emailEncriptado',
        });

    const handleVerifySuccess = (data: any) => {
        if (data?.ok) setIsVerifiedUser(true);
        setLoadingUpdateUser(false);
    };
    const handleVerifyError = (error: any) => {
        setLoadingUpdateUser(false);
    };

    const { mutate } = useUpdateUnverifiedUser(
        handleVerifySuccess,
        handleVerifyError
    );

    useEffect(() => {
        if (valueRedUser?.ok) {
            (async () => {
                setLoadingUpdateUser(true);
                mutate({ valueRedUser });
            })();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    defaultColor={defaultBrand}
                    text={
                        <h1
                            style={{
                                color:
                                    plantillaStyles?.colorFondo || defaultBrand,
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
