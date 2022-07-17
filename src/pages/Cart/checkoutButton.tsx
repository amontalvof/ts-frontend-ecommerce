import { CabeceraCheckout } from './styles';

const CheckoutButton = ({
    colorFondo,
    colorTexto,
}: {
    colorFondo?: string;
    colorTexto?: string;
}) => {
    return (
        <CabeceraCheckout className="panel-heading">
            <button
                className="btn btn-default btn-lg pull-right"
                style={{
                    outline: 'none',
                    backgroundColor: colorFondo,
                    color: colorTexto,
                }}
            >
                MAKE PAYMENT
            </button>
        </CabeceraCheckout>
    );
};

export default CheckoutButton;
