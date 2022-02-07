import { Dispatch, SetStateAction } from 'react';
import { FaTh, FaList } from 'react-icons/fa';
import { TStyle } from '../../interfaces/plantilla';
import { IconTextContainer, StyledButtonText, StyledButton } from './styles';

interface IDisplayGridListBarProps {
    changeDisplay: Dispatch<SetStateAction<string>>;
    display: string;
    plantillaStyles: TStyle;
}

const DisplayGridListBar = ({
    display,
    changeDisplay,
    plantillaStyles,
}: IDisplayGridListBarProps) => {
    return (
        <div className="container-fluid well well-sm">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="btn-group pull-right">
                            <StyledButton
                                type="button"
                                className="btn btn-default"
                                style={{ outline: 'none' }}
                                onClick={() => changeDisplay('grid')}
                                isSelected={display === 'grid'}
                                colorfondo={plantillaStyles.colorFondo}
                                colortexto={plantillaStyles.colorTexto}
                            >
                                <IconTextContainer>
                                    <FaTh />
                                    <StyledButtonText className="col-xs-0 pull-right">
                                        GRID
                                    </StyledButtonText>
                                </IconTextContainer>
                            </StyledButton>
                            <StyledButton
                                type="button"
                                className="btn btn-default"
                                style={{ outline: 'none' }}
                                onClick={() => changeDisplay('list')}
                                isSelected={display === 'list'}
                                colorfondo={plantillaStyles.colorFondo}
                                colortexto={plantillaStyles.colorTexto}
                            >
                                <IconTextContainer>
                                    <FaList />
                                    <StyledButtonText className="col-xs-0 pull-right">
                                        LIST
                                    </StyledButtonText>
                                </IconTextContainer>
                            </StyledButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayGridListBar;
