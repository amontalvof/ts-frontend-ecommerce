import {
    StyledFaStar,
    StyledFaStarHalfAlt,
    StyledFaRegStar,
    HeaderInfoContainer,
    ImageContainer,
} from './styles';
import MaleUserAvatar from '../../assets/maleUserAvatar';

const Comments = ({ color }: { color?: string }) => {
    return (
        <div className="row">
            <div className="panel-group col-md-3 col-sm-6 col-xs-12">
                <div className="panel panel-default">
                    <HeaderInfoContainer className="panel-heading text-uppercase">
                        <span>John Doe</span>
                        <ImageContainer>
                            <img
                                className="img-circle"
                                src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
                                alt="user"
                            />
                        </ImageContainer>
                    </HeaderInfoContainer>
                    <div className="panel-body">
                        <small>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Porro omnis molestias consequuntur quaerat
                            illo aliquid, commodi iste quam laboriosam quas
                            voluptate tempore distinctio dolore dolorem, ut,
                            minus vitae unde optio.
                        </small>
                    </div>
                    <div className="panel-footer">
                        <StyledFaStar />
                        <StyledFaStar />
                        <StyledFaStar />
                        <StyledFaStarHalfAlt />
                        <StyledFaRegStar />
                    </div>
                </div>
            </div>
            <div className="panel-group col-md-3 col-sm-6 col-xs-12">
                <div className="panel panel-default">
                    <HeaderInfoContainer className="panel-heading text-uppercase">
                        <span>Andy Montalvo</span>
                        <MaleUserAvatar color={color} width="50" height="50" />
                    </HeaderInfoContainer>
                    <div className="panel-body">
                        <small>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Porro omnis molestias consequuntur quaerat
                            illo aliquid, commodi iste quam laboriosam quas
                            voluptate tempore distinctio dolore dolorem, ut,
                            minus vitae unde optio.
                        </small>
                    </div>
                    <div className="panel-footer">
                        <StyledFaStar />
                        <StyledFaStar />
                        <StyledFaStar />
                        <StyledFaStarHalfAlt />
                        <StyledFaRegStar />
                    </div>
                </div>
            </div>
            <div className="panel-group col-md-3 col-sm-6 col-xs-12">
                <div className="panel panel-default">
                    <HeaderInfoContainer className="panel-heading text-uppercase">
                        <span>John Doe</span>
                        <ImageContainer>
                            <img
                                className="img-circle"
                                src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
                                alt="user"
                            />
                        </ImageContainer>
                    </HeaderInfoContainer>
                    <div className="panel-body">
                        <small>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Porro omnis molestias consequuntur quaerat
                            illo aliquid, commodi iste quam laboriosam quas
                            voluptate tempore distinctio dolore dolorem, ut,
                            minus vitae unde optio.
                        </small>
                    </div>
                    <div className="panel-footer">
                        <StyledFaStar />
                        <StyledFaStar />
                        <StyledFaStar />
                        <StyledFaStarHalfAlt />
                        <StyledFaRegStar />
                    </div>
                </div>
            </div>
            <div className="panel-group col-md-3 col-sm-6 col-xs-12">
                <div className="panel panel-default">
                    <HeaderInfoContainer className="panel-heading text-uppercase">
                        <span>Andy Montalvo</span>
                        <MaleUserAvatar color={color} width="50" height="50" />
                    </HeaderInfoContainer>
                    <div className="panel-body">
                        <small>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Porro omnis molestias consequuntur quaerat
                            illo aliquid, commodi iste quam laboriosam quas
                            voluptate tempore distinctio dolore dolorem, ut,
                            minus vitae unde optio.
                        </small>
                    </div>
                    <div className="panel-footer">
                        <StyledFaStar />
                        <StyledFaStar />
                        <StyledFaStar />
                        <StyledFaStarHalfAlt />
                        <StyledFaRegStar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;
