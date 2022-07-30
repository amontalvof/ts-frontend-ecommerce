import { RenderIf } from '../RenderIf';
import { StyledBadge } from './styles';

interface ITitleProps {
    titulo: string;
    colorfondo: string;
    colortexto: string;
    oferta: number;
    nuevo: number;
    descuentoOferta: number;
}
const Title = ({
    titulo,
    nuevo,
    oferta,
    descuentoOferta,
    colorfondo,
    colortexto,
}: ITitleProps) => {
    const isNew = !!nuevo;
    const hasOffer = !!oferta;
    return (
        <>
            <RenderIf isTrue={!hasOffer}>
                <>
                    <RenderIf isTrue={!isNew}>
                        <h1 className="text-muted text-uppercase">{titulo}</h1>
                    </RenderIf>
                    <RenderIf isTrue={isNew}>
                        <h1 className="text-muted text-uppercase">
                            {titulo}
                            <br />
                            <small>
                                <StyledBadge
                                    className="label"
                                    colortexto={colortexto}
                                    colorfondo={colorfondo}
                                >
                                    New
                                </StyledBadge>
                            </small>
                        </h1>
                    </RenderIf>
                </>
            </RenderIf>
            <RenderIf isTrue={hasOffer}>
                <>
                    <RenderIf isTrue={!isNew}>
                        <h1 className="text-muted text-uppercase">
                            {titulo}
                            <br />
                            <small>
                                <StyledBadge
                                    className="label"
                                    colortexto={colortexto}
                                    colorfondo={colorfondo}
                                >
                                    {descuentoOferta} % off
                                </StyledBadge>
                            </small>
                        </h1>
                    </RenderIf>
                    <RenderIf isTrue={isNew}>
                        <h1 className="text-muted text-uppercase">
                            {titulo}
                            <br />
                            <small>
                                <StyledBadge
                                    className="label"
                                    colortexto={colortexto}
                                    colorfondo={colorfondo}
                                >
                                    New
                                </StyledBadge>{' '}
                                <StyledBadge
                                    className="label"
                                    colortexto={colortexto}
                                    colorfondo={colorfondo}
                                >
                                    {descuentoOferta} % off
                                </StyledBadge>
                            </small>
                        </h1>
                    </RenderIf>
                </>
            </RenderIf>
        </>
    );
};

export default Title;
