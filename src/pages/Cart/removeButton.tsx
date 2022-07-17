import { FaTimes } from 'react-icons/fa';
import { Center } from './styles';

interface IRemoveButtonProps {
    productId: number;
    colorFondo?: string;
    colorTexto?: string;
    removeFromCart: (productId: number) => void;
}

const RemoveButton = ({
    productId,
    colorFondo,
    colorTexto,
    removeFromCart,
}: IRemoveButtonProps) => {
    return (
        <div className="col-sm-1 col-xs-12">
            <br />
            <Center>
                <button
                    className="btn btn-default backColor"
                    style={{
                        outline: 'none',
                        backgroundColor: colorFondo,
                    }}
                    onClick={() => removeFromCart(productId)}
                >
                    <Center>
                        <FaTimes
                            style={{
                                color: colorTexto,
                            }}
                        />
                    </Center>
                </button>
            </Center>
        </div>
    );
};

export default RemoveButton;
