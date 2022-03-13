import styled from 'styled-components';
import { FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';
import { TStyle } from '../../interfaces/plantilla';

interface IStyledAnchorProps {
    plantillaStyles?: TStyle;
}

export const InfoContainer = styled.div`
    margin: 20px auto;
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledSpan = styled.span`
    margin-left: 5px;
`;

export const StyledAnchor = styled.a<IStyledAnchorProps>`
    cursor: pointer;
    font-size: 14px;
    :hover {
        color: ${(props) => props.plantillaStyles?.colorFondo};
    }
`;

export const StyledFacebookIcon = styled(FaFacebookSquare)`
    color: #4064ac;
`;

export const StyledWhatsappIcon = styled(FaWhatsappSquare)`
    color: #45cc63;
`;

export const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    flex-grow: 1;
`;

export const StyledErrorContainer = styled.div`
    margin-bottom: 100px;
`;
