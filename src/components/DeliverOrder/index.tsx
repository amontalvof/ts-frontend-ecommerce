import { FaCheck, FaClock } from 'react-icons/fa';
import { StyledBar, StyledIconContainer } from './styles';
import { RenderIf } from '../RenderIf';

interface IDeliverOrderProps {
    deliveryText: string;
    envio: number;
}

export const DeliverOrder = ({ deliveryText, envio }: IDeliverOrderProps) => {
    const isSent = envio === 1 || envio === 2;
    const isDelivered = envio === 2;
    return (
        <>
            <h6>{deliveryText}</h6>
            <div className="progress">
                <StyledBar
                    className="progress-bar progress-bar-info"
                    role="progressbar"
                >
                    <StyledIconContainer>
                        <FaCheck
                            style={{
                                marginRight: '5px',
                            }}
                        />
                        Preparing
                    </StyledIconContainer>
                </StyledBar>
                <StyledBar
                    className="progress-bar progress-bar-default"
                    role="progressbar"
                >
                    <StyledIconContainer>
                        <RenderIf isTrue={isSent}>
                            <FaCheck
                                style={{
                                    marginRight: '5px',
                                }}
                            />
                        </RenderIf>
                        <RenderIf isTrue={!isSent}>
                            <FaClock
                                style={{
                                    marginRight: '5px',
                                }}
                            />
                        </RenderIf>
                        Sent
                    </StyledIconContainer>
                </StyledBar>
                <StyledBar
                    className="progress-bar progress-bar-success"
                    role="progressbar"
                >
                    <StyledIconContainer>
                        <RenderIf isTrue={isDelivered}>
                            <FaCheck
                                style={{
                                    marginRight: '5px',
                                }}
                            />
                        </RenderIf>
                        <RenderIf isTrue={!isDelivered}>
                            <FaClock
                                style={{
                                    marginRight: '5px',
                                }}
                            />
                        </RenderIf>
                        Delivered
                    </StyledIconContainer>
                </StyledBar>
            </div>
        </>
    );
};
