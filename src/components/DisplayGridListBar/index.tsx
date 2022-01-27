import { FaTh, FaList } from 'react-icons/fa';
import { IconTextContainer, StyledButtonText } from './styles';

const DisplayGridListBar = () => {
    return (
        <div className="container-fluid well well-sm">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="btn-group pull-right">
                            <button
                                type="button"
                                className="btn btn-default btnGrid"
                            >
                                <IconTextContainer>
                                    <FaTh />
                                    <StyledButtonText className="col-xs-0 pull-right">
                                        GRID
                                    </StyledButtonText>
                                </IconTextContainer>
                            </button>
                            <button
                                type="button"
                                className="btn btn-default btnList"
                            >
                                <IconTextContainer>
                                    <FaList />
                                    <StyledButtonText className="col-xs-0 pull-right">
                                        LIST
                                    </StyledButtonText>
                                </IconTextContainer>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayGridListBar;
