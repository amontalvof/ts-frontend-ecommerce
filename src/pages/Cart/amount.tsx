import {
    Center,
    StyledPAmount,
    StyledFaAngleDown,
    StyledFaAngleUp,
} from './styles';

interface IAmountProps {
    tipo: string;
    productId: number;
    cantidad: number;
    decreaseAmount: (productId: number, cantidad: number) => void;
    increaseAmount: (productId: number) => void;
}

const Amount = ({
    tipo,
    productId,
    cantidad,
    decreaseAmount,
    increaseAmount,
}: IAmountProps) => {
    return (
        <div className="col-md-2 col-sm-3 col-xs-8">
            <br />
            <div className="col-xs-8">
                <Center>
                    <StyledPAmount tipo={tipo}>
                        <span>
                            <StyledFaAngleDown
                                tipo={tipo}
                                className="countItem"
                                onClick={() => {
                                    if (tipo === 'virtual') {
                                        return;
                                    }
                                    decreaseAmount(productId, cantidad);
                                }}
                            />
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <strong>{cantidad}</strong>
                        &nbsp;&nbsp;&nbsp;
                        <span>
                            <StyledFaAngleUp
                                tipo={tipo}
                                className="countItem"
                                onClick={() => {
                                    if (tipo === 'virtual') {
                                        return;
                                    }
                                    increaseAmount(productId);
                                }}
                            />
                        </span>
                    </StyledPAmount>
                </Center>
            </div>
        </div>
    );
};

export default Amount;
