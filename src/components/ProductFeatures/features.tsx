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
import { IconContainer, StyledUl } from './styles';

interface IFeaturesProps {
    tipo: string;
    detalles: string;
}

const Features = ({ tipo, detalles }: IFeaturesProps) => {
    const hasDetails = detalles !== null;
    const isNotVirtual = tipo === 'fisico';
    const details = hasDetails && JSON.parse(detalles);
    return (
        <RenderIf isTrue={hasDetails}>
            <>
                <hr />
                <RenderIf isTrue={isNotVirtual}>
                    <>
                        <RenderIf isTrue={!!details.Size}>
                            <div className="col-md-3 col-xs-12">
                                <select className="form-control seleccionarDetalle">
                                    <option value="">Size</option>
                                    {!!details.Size &&
                                        details.Size.map((size: number) => (
                                            <option
                                                key={nanoid(10)}
                                                value={size}
                                            >
                                                {size}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        </RenderIf>
                        <RenderIf isTrue={!!details.Color}>
                            <div className="col-md-3 col-xs-12">
                                <select className="form-control seleccionarDetalle">
                                    <option value="">Color</option>
                                    {!!details.Color &&
                                        details.Color.map((color: string) => (
                                            <option
                                                key={nanoid(10)}
                                                value={color}
                                            >
                                                {capitalizeFirstLetter(color)}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        </RenderIf>
                        <RenderIf isTrue={!!details.Brand}>
                            <div className="col-md-3 col-xs-12">
                                <select className="form-control seleccionarDetalle">
                                    <option value="">Brand</option>
                                    {!!details.Brand &&
                                        details.Brand.map((brand: string) => (
                                            <option
                                                key={nanoid(10)}
                                                value={brand}
                                            >
                                                {capitalizeFirstLetter(brand)}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        </RenderIf>
                    </>
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
