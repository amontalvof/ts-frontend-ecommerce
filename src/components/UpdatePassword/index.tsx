import { Form, Formik } from 'formik';
import { FaGoogle } from 'react-icons/fa';
import { TextInput } from '../FormFields/textInput';
import { RenderIf } from '../RenderIf/index';
import { StyledButton } from './styles';
import { updatePasswordValidationSchema } from './validation/updatePasswordValidationSchema';
import { toast } from 'react-toastify';
import { startLogout } from '../../redux/actions/authModalActions';
import { useDispatch } from 'react-redux';
import useUpdateUserPassword from '../../hooks/useUpdateUserPassword';
import useDeleteUserAccount from '../../hooks/useDeleteUserAccount';

interface IUpdatePasswordProps {
    uid?: number;
    modo?: string;
    name?: string;
    email?: string;
    foto?: string;
    colorfondo?: string;
    colortexto?: string;
}

export const UpdatePassword = ({
    uid,
    modo,
    name,
    email,
    foto,
    colorfondo,
    colortexto,
}: IUpdatePasswordProps) => {
    const dispatch = useDispatch();
    const { mutate: mutateUpdatePassword } = useUpdateUserPassword();

    const handleOnSuccessDelete = (data: any) => {
        if (data?.ok) {
            dispatch(startLogout());
            toast.success(data?.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            toast.error(data?.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    };

    const handleOnErrorDelete = (error: any) => {
        toast.error(error?.message, {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    const { mutate: mutateDeleteUserAccount } = useDeleteUserAccount(
        handleOnSuccessDelete,
        handleOnErrorDelete
    );

    const handleUpdatePassword = async (values: {
        updPassword1: string;
        updPassword2: string;
    }) => {
        mutateUpdatePassword({ uid, passwords: values });
    };

    const handleDelete = async () => {
        mutateDeleteUserAccount({ uid, colorfondo, modo, foto });
    };

    return (
        <Formik
            initialValues={{ updPassword1: '', updPassword2: '' }}
            onSubmit={handleUpdatePassword}
            validationSchema={updatePasswordValidationSchema}
        >
            {() => (
                <Form noValidate>
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
                                    onClick={handleDelete}
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
                                <div className="form-group">
                                    <div
                                        className="input-group"
                                        style={{ marginBottom: '3px' }}
                                    >
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
                                </div>
                                <label
                                    className="control-label text-muted text-uppercase"
                                    htmlFor="editarEmail"
                                >
                                    Email:
                                </label>
                                <div className="form-group">
                                    <div
                                        className="input-group"
                                        style={{ marginBottom: '3px' }}
                                    >
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
                                </div>
                                <label
                                    className="control-label text-muted text-uppercase"
                                    htmlFor="editarPassword1"
                                >
                                    New Password:
                                </label>
                                <TextInput
                                    type="password"
                                    className="form-control"
                                    id="editarPassword1"
                                    name="updPassword1"
                                    placeholder="••••••••••"
                                    required
                                />
                                <label
                                    className="control-label text-muted text-uppercase"
                                    htmlFor="editarPassword2"
                                >
                                    Confirm Password:
                                </label>
                                <TextInput
                                    type="password"
                                    className="form-control"
                                    id="editarPassword2"
                                    name="updPassword2"
                                    placeholder="••••••••••"
                                    required
                                />
                                <br />
                                <StyledButton
                                    colorfondo={colorfondo}
                                    colortexto={colortexto}
                                    type="submit"
                                    style={{ outline: 'none' }}
                                    className="btn btn-default backColor btn-md pull-left"
                                >
                                    Update password
                                </StyledButton>
                                <button
                                    style={{ outline: 'none' }}
                                    type="button"
                                    className="btn btn-danger btn-md pull-right"
                                    onClick={handleDelete}
                                >
                                    Delete account
                                </button>
                            </div>
                        </RenderIf>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
