import styled from 'styled-components';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface IStyledAnchor {
    color?: string;
}

export const StyledFaStar = styled(FaStar)`
    color: #fdcc0d;
`;
export const StyledFaStarHalfAlt = styled(FaStarHalfAlt)`
    color: #fdcc0d;
`;
export const StyledFaRegStar = styled(FaRegStar)`
    color: #fdcc0d;
`;

export const StarIconsContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Divider = styled.span`
    margin: 0 5px;
`;

export const StyledAnchor = styled.a<IStyledAnchor>`
    :hover {
        color: ${(props) => props.color};
    }
`;
