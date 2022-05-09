import styled from 'styled-components';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { yellowStar } from '../../constants';

export const StyledFaStar = styled(FaStar)`
    color: ${yellowStar};
`;

export const StyledFaStarHalfAlt = styled(FaStarHalfAlt)`
    color: ${yellowStar};
`;

export const StyledFaRegStar = styled(FaRegStar)`
    color: ${yellowStar};
`;

export const HeaderInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ImageContainer = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;
