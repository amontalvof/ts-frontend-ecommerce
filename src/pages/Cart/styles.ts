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
    display: flex;
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

export const RemoveButtonContainer = styled.div`
    margin-bottom: 20px;
`;

export const ProductImageContainer = styled.div`
    padding: 0 0 10px 0;

    /*=============================================
    SMALL DESKTOP OR VERTICAL TABLET (SM we review at 768px)
    =============================================*/

    @media (max-width: 991px) and (min-width: 768px) {
        padding-bottom: 10px 0 0 0;
    }
`;

export const TitleContainer = styled.div`
    padding-bottom: 10px;
`;

export const AmountContainer = styled.div`
    padding-bottom: 10px;
`;
