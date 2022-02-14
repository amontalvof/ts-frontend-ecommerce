import { Dispatch, SetStateAction } from 'react';
import { FaTh, FaList } from 'react-icons/fa';
import { TStyle } from '../../interfaces/plantilla';
import RenderIf from '../RenderIf';
import { IconTextContainer, StyledButtonText, StyledButton } from './styles';

interface IDisplayGridListBarProps {
    changeDisplay: Dispatch<SetStateAction<string>>;
    display: string;
    plantillaStyles: TStyle;
    displayOrderDropdown?: boolean;
}

const DisplayGridListBar = ({
    display,
    displayOrderDropdown = false,
    changeDisplay,
    plantillaStyles,
}: IDisplayGridListBarProps) => {
    return (
        <div className="container-fluid well well-sm">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-xs-12">
                        <RenderIf isTrue={displayOrderDropdown}>
                            <div className="btn-group">
                                <>
                                    <button
                                        type="button"
                                        className="btn btn-default dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        Order Products{' '}
                                        <span className="caret" />
                                    </button>
                                    <ul className="dropdown-menu" role="menu">
                                        {/* <li>
                                            <a href="#">More recent</a>
                                        </li>
                                        <li>
                                            <a href="#">Oldest</a>
                                        </li> */}
                                    </ul>
                                </>
                            </div>
                        </RenderIf>
                    </div>
                    <div className="col-sm-6 col-xs-12">
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
