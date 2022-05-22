import styled from 'styled-components';
import { redError } from '../../constants';

interface ICheckboxProps {
    colorfondo?: string;
}

export const ErrorText = styled.p`
    color: ${redError};
`;

export const StyledCheckbox = styled.input<ICheckboxProps>`
    cursor: pointer;
    vertical-align: middle;
    position: relative;
    bottom: 3px;
    accent-color: ${(props) => props.colorfondo};
`;

export const StyledTextArea = styled.textarea`
    resize: none;
`;
