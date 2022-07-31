import { FaTimes } from 'react-icons/fa';
import { Center, RemoveButtonContainer } from './styles';

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
        <RemoveButtonContainer className="col-sm-1 col-xs-12">
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
        </RemoveButtonContainer>
    );
};

export default RemoveButton;
