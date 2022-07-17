import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import styled from 'styled-components';
import { gray, lightBlack } from '../../constants';

export const Container = styled.div`
    margin: 20px 0 0;
    padding: 0 0 40px;
`;

export const CabeceraCarrito = styled.div`
    height: 40px;
    h3 {
        margin-top: -5px;
    }
`;

export const CabeceraCheckout = styled.div`
    height: 66px;
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ItemCarrito = styled.div`
    font-size: 16px;
`;

export const ErrorContainer = styled.div`
    color: ${lightBlack};
`;

export const StyledPAmount = styled.div<{ tipo: string }>`
    color: ${(props) => (props.tipo === 'virtual' ? gray : lightBlack)};
`;

export const StyledFaAngleDown = styled(FaAngleDown)<{ tipo: string }>`
    :hover {
        cursor: ${(props) =>
            props.tipo === 'virtual' ? 'not-allowed' : 'pointer'};
    }
`;
export const StyledFaAngleUp = styled(FaAngleUp)<{ tipo: string }>`
    :hover {
        cursor: ${(props) =>
            props.tipo === 'virtual' ? 'not-allowed' : 'pointer'};
    }
`;
