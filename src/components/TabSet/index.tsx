/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import {
    Divider,
    StarIconsContainer,
    StyledFaStar,
    StyledFaStarHalfAlt,
    StyledFaRegStar,
    StyledAnchor,
} from './styles';

const TabSet = ({ color }: { color?: string }) => {
    return (
        <div className="row">
            <ul className="nav nav-tabs">
                <li className="active">
                    <Link to="#">COMMENTS 22</Link>
                </li>
                <li>
                    <Link to="#">SEE MORE</Link>
                </li>
                <li className="pull-right">
                    <StyledAnchor className="text-muted" color={color}>
                        <StarIconsContainer>
                            <span>AVERAGE RATING: 3.5</span>
                            <Divider>|</Divider>
                            <StyledFaStar />
                            <StyledFaStar />
                            <StyledFaStar />
                            <StyledFaStarHalfAlt />
                            <StyledFaRegStar />
                        </StarIconsContainer>
                    </StyledAnchor>
                </li>
            </ul>
            <br />
        </div>
    );
};

export default TabSet;
