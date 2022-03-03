/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { FaTh, FaList } from 'react-icons/fa';
import { TStyle } from '../../interfaces/plantilla';
import RenderIf from '../RenderIf';
import {
    IconTextContainer,
    StyledButtonText,
    StyledButton,
    StyledLi,
    Container,
} from './styles';

interface IDisplayGridListBarProps {
    viewType: string;
    plantillaStyles: TStyle;
    displaySortDropdown?: boolean;
    sortDirection?: string;
    onSort?: React.Dispatch<React.SetStateAction<string>>;
    onChangeViewType: React.Dispatch<React.SetStateAction<string>>;
}

export const DisplayGridListBar = ({
    plantillaStyles,
    displaySortDropdown = false,
    sortDirection,
    onSort,
    viewType,
    onChangeViewType,
}: IDisplayGridListBarProps) => {
    const [hoveredRecent, setHoveredRecent] = useState<boolean>(false);
    const [hoveredOld, setHoveredOld] = useState<boolean>(false);
    const handleSort = (value: string) => {
        if (onSort) {
            onSort(value);
        }
    };
    const isSortDesc = sortDirection === 'DESC';
    const isSortAsc = sortDirection === 'ASC';
    const selectListStyles = {
        backgroundColor: plantillaStyles?.colorFondo,
    };

    const recentAnchorStyles = {
        color: hoveredRecent ? '#333333' : plantillaStyles?.colorTexto,
    };
    const oldAnchorStyles = {
        color: hoveredOld ? '#333333' : plantillaStyles?.colorTexto,
    };

    const toggleHoverRecent = () => {
        setHoveredRecent(!hoveredRecent);
    };
    const toggleHoverOld = () => {
        setHoveredOld(!hoveredOld);
    };

    return (
        <div className="container-fluid well well-sm">
            <div className="container">
                <Container className="row">
                    <div className="col-sm-6 col-xs-12">
                        <RenderIf isTrue={displaySortDropdown}>
                            <div className="btn-group">
                                <>
                                    <button
                                        type="button"
                                        className="btn btn-default dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        Sort Products <span className="caret" />
                                    </button>
                                    <ul className="dropdown-menu" role="menu">
                                        <StyledLi
                                            onMouseEnter={toggleHoverRecent}
                                            onMouseLeave={toggleHoverRecent}
                                            onClick={() => handleSort('DESC')}
                                            style={
                                                isSortDesc
                                                    ? selectListStyles
                                                    : {}
                                            }
                                        >
                                            <a
                                                style={
                                                    isSortDesc
                                                        ? recentAnchorStyles
                                                        : {}
                                                }
                                            >
                                                More recent
                                            </a>
                                        </StyledLi>
                                        <StyledLi
                                            onMouseEnter={toggleHoverOld}
                                            onMouseLeave={toggleHoverOld}
                                            onClick={() => handleSort('ASC')}
                                            style={
                                                isSortAsc
                                                    ? selectListStyles
                                                    : {}
                                            }
                                        >
                                            <a
                                                style={
                                                    isSortAsc
                                                        ? oldAnchorStyles
                                                        : {}
                                                }
                                            >
                                                More old
                                            </a>
                                        </StyledLi>
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
                                onClick={() => onChangeViewType('grid')}
                                isSelected={viewType === 'grid'}
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
                                onClick={() => onChangeViewType('list')}
                                isSelected={viewType === 'list'}
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
                </Container>
            </div>
        </div>
    );
};
