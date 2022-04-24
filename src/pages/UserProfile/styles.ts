import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px 0 0;
    padding: 0 0 40px;
`;

export const TabTitleContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledTabTitle = styled.span`
    margin-left: 5px;
`;

export const StyledTabLink = styled(Link)`
    color: #333333;
    :hover {
        color: #333333;
    }
`;
