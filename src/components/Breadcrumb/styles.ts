import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IStyledLinkProps {
    colorfondo?: string;
}

export const StyledLink = styled(Link)<IStyledLinkProps>`
    color: #777;
    :hover {
        color: ${(props) => props.colorfondo};
    }
`;
