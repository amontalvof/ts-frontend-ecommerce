import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IStyledButtonProps {
    colorfondo?: string;
    colortexto?: string;
}

export const Container = styled.div`
    margin-top: 20px;
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

export const StyledUserImg = styled.img`
    width: 80%;
    margin: 10px 0;
`;

export const StyledButton = styled.button<IStyledButtonProps>`
    background-color: ${(props) => props.colorfondo};
    color: ${(props) => props.colortexto};
`;
