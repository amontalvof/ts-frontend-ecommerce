import { omit } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { IUserInfo } from '../../interfaces/user';
import { openAuthModal, openCardModal } from '../../redux/actions';
import { RootStore } from '../../redux/store';
import { CabeceraCheckout } from './styles';

const CheckoutButton = ({
    colorFondo,
    colorTexto,
}: {
    colorFondo?: string;
    colorTexto?: string;
}) => {
    const state = useSelector((state: RootStore) => state);
    const { authReducer } = state;
    const dispatch = useDispatch();
    const userInfo = omit<IUserInfo>(authReducer, 'checking');

    const isUserLoggedIn = !!userInfo?.uid;

    const handleButtonClick = () => {
        if (!isUserLoggedIn) {
            dispatch(openAuthModal('login'));
        } else {
            dispatch(openCardModal());
        }
    };

    return (
        <CabeceraCheckout className="panel-heading">
            <button
                className="btn btn-default btn-lg pull-right"
                style={{
                    outline: 'none',
                    backgroundColor: colorFondo,
                    color: colorTexto,
                }}
                onClick={handleButtonClick}
            >
                MAKE PAYMENT
            </button>
        </CabeceraCheckout>
    );
};

export default CheckoutButton;
