import ReactTooltip from 'react-tooltip';
import { FaHeart, FaEye, FaShoppingCart } from 'react-icons/fa';
import { StyledButton, IconContainer } from './styles';

interface IButtonCardProps {
    icon: string;
    colortexto?: string;
    colorfondo?: string;
    tooltipText: string;
    onClick?: () => void;
}

const iconsMap: { [key: string]: any } = {
    Heart: FaHeart,
    Eye: FaEye,
    Cart: FaShoppingCart,
};

const ButtonCard = ({
    icon,
    colortexto,
    colorfondo,
    tooltipText,
    onClick,
}: IButtonCardProps) => {
    const dataFor = `tooltip${icon}`;
    const Icon = iconsMap[icon];
    return (
        <>
            <StyledButton
                type="button"
                className="btn btn-default btn-xs"
                data-tip
                data-for={dataFor}
                style={{ outline: 'none' }}
                colortexto={colortexto}
                colorfondo={colorfondo}
                onClick={onClick}
            >
                <IconContainer>
                    <Icon />
                </IconContainer>
            </StyledButton>
            <ReactTooltip id={dataFor} effect="solid">
                {tooltipText}
            </ReactTooltip>
        </>
    );
};

export default ButtonCard;
