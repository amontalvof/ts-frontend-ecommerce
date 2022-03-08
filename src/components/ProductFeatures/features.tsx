import { nanoid } from 'nanoid';
import {
    FaPlayCircle,
    FaClock,
    FaRegCheckCircle,
    FaInfoCircle,
    FaDesktop,
    FaTrophy,
} from 'react-icons/fa';
import capitalizeFirstLetter from '../../helpers/capitalizeFirstLetter';
import RenderIf from '../RenderIf';
import {
    IconContainer,
    NoVirtualContainer,
    StyledSelect,
    StyledUl,
} from './styles';

interface IFeaturesProps {
    tipo: string;
    detalles: string;
    colorfondo: string;
}

const Features = ({ tipo, detalles, colorfondo }: IFeaturesProps) => {
    const hasDetails = detalles !== null;
    const isNotVirtual = tipo === 'fisico';
    const details = hasDetails && JSON.parse(detalles);
    return (
        <RenderIf isTrue={hasDetails}>
            <>
                <hr />
                <RenderIf isTrue={isNotVirtual}>
                    <NoVirtualContainer>
                        <RenderIf isTrue={!!details.Size}>
                            <StyledSelect colorfondo={colorfondo}>
                                <option value="">Size</option>
                                {!!details.Size &&
                                    details.Size.map((size: number) => (
                                        <option key={nanoid(10)} value={size}>
                                            {size}
                                        </option>
                                    ))}
                            </StyledSelect>
                        </RenderIf>
                        <RenderIf isTrue={!!details.Color}>
                            <StyledSelect colorfondo={colorfondo}>
                                <option value="">Color</option>
                                {!!details.Color &&
                                    details.Color.map((color: string) => (
                                        <option key={nanoid(10)} value={color}>
                                            {capitalizeFirstLetter(color)}
                                        </option>
                                    ))}
                            </StyledSelect>
                        </RenderIf>
                        <RenderIf isTrue={!!details.Brand}>
                            <StyledSelect colorfondo={colorfondo}>
                                <option value="">Brand</option>
                                {!!details.Brand &&
                                    details.Brand.map((brand: string) => (
                                        <option key={nanoid(10)} value={brand}>
                                            {capitalizeFirstLetter(brand)}
                                        </option>
                                    ))}
                            </StyledSelect>
                        </RenderIf>
                    </NoVirtualContainer>
                </RenderIf>
                <RenderIf isTrue={!isNotVirtual}>
                    <div className="col-xs-12">
                        <StyledUl>
                            <li>
                                <IconContainer>
                                    <FaPlayCircle style={{ marginRight: 10 }} />{' '}
                                    {details.Classes}
                                </IconContainer>
                            </li>
                            <li>
                                <IconContainer>
                                    <FaClock style={{ marginRight: 10 }} />{' '}
                                    {details.Time}
                                </IconContainer>
                            </li>
                            <li>
                                <IconContainer>
                                    <FaRegCheckCircle
                                        style={{ marginRight: 10 }}
                                    />{' '}
                                    {details.Level}
                                </IconContainer>
                            </li>
                            <li>
                                <IconContainer>
                                    <FaInfoCircle style={{ marginRight: 10 }} />{' '}
                                    {details.Access}
                                </IconContainer>
                            </li>
                            <li>
                                <IconContainer>
                                    <FaDesktop style={{ marginRight: 10 }} />{' '}
                                    {details.Device}
                                </IconContainer>
                            </li>
                            <li>
                                <IconContainer>
                                    <FaTrophy style={{ marginRight: 10 }} />{' '}
                                    {details.Certificate}
                                </IconContainer>
                            </li>
                        </StyledUl>
                    </div>
                </RenderIf>
            </>
        </RenderIf>
    );
};

export default Features;
