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
import { StyledVirtualFeaturesContainer } from './styles';
import { IconContainer, NoVirtualContainer, StyledSelect } from './styles';

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
                    <StyledVirtualFeaturesContainer className="col-xs-12">
                        <IconContainer>
                            <FaPlayCircle style={{ marginRight: 5 }} />{' '}
                            {details.Classes}
                        </IconContainer>
                        <IconContainer>
                            <FaClock style={{ marginRight: 5 }} />{' '}
                            {details.Time}
                        </IconContainer>
                        <IconContainer>
                            <FaRegCheckCircle style={{ marginRight: 5 }} />{' '}
                            {details.Level}
                        </IconContainer>
                        <IconContainer>
                            <FaInfoCircle style={{ marginRight: 5 }} />{' '}
                            {details.Access}
                        </IconContainer>
                        <IconContainer>
                            <FaDesktop style={{ marginRight: 5 }} />{' '}
                            {details.Device}
                        </IconContainer>
                        <IconContainer>
                            <FaTrophy style={{ marginRight: 5 }} />{' '}
                            {details.Certificate}
                        </IconContainer>
                    </StyledVirtualFeaturesContainer>
                </RenderIf>
            </>
        </RenderIf>
    );
};

export default Features;
