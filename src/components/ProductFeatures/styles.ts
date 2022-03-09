import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

interface IStyledBadgeProps {
    colortexto?: string;
    colorfondo?: string;
}

interface IStyledSelectProps {
    colorfondo?: string;
}

export const StyledBadge = styled.span<IStyledBadgeProps>`
    background-color: ${(props) => props.colorfondo};
    color: ${(props) => props.colortexto};
`;

export const StyledOferta = styled.strong`
    text-decoration: line-through;
    color: #ccc;
    font-size: 16px;
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 25px;
`;

export const AddToCartIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledLabel = styled.div`
    display: inline-flex;
    align-items: center;
`;

export const StyledSelect = styled.select<IStyledSelectProps>`
    margin: 0 5px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 0;
    outline: 1px solid #777777;
    border-right: 10px solid transparent;
    background-color: transparent;
    cursor: pointer;
    :focus {
        outline: 1px solid ${(props) => props.colorfondo};
        box-shadow: 0px 0px 2px 2px ${(props) => props.colorfondo};
    }
`;

export const NoVirtualContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledFaShoppingCart = styled(FaShoppingCart)`
    margin: 5px;
    /*=============================================
    MOVIL (XS revisamos en 320px)
    =============================================*/
    @media (max-width: 767px) {
        display: none;
    }
`;

export const StyledBuyButton = styled.button`
    margin-top: 10px;
`;

export const StyledVirtualFeaturesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledDeliveryText = styled.span`
    font-size: 14px;
`;
