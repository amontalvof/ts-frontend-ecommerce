import RenderIf from '../RenderIf';
import {
    AddToCartIconContainer,
    StyledFaShoppingCart,
    StyledBuyButton,
} from './styles';

interface IBuyButtonsProps {
    precio: number;
    tipo: string;
    colorfondo: string;
    colortexto: string;
}

const BuyButtons = ({
    precio,
    tipo,
    colorfondo,
    colortexto,
}: IBuyButtonsProps) => {
    const isFree = precio === 0;
    const isVirtual = tipo === 'virtual';

    const buttonStyles = {
        backgroundColor: colorfondo,
        color: colortexto,
    };

    return (
        <>
            <div className="clearfix" />
            <hr />
            <RenderIf isTrue={isFree}>
                <div className="col-md-6 col-xs-12">
                    <RenderIf isTrue={isVirtual}>
                        <StyledBuyButton
                            className="btn btn-default btn-block btn-lg"
                            style={buttonStyles}
                        >
                            ACCESS NOW
                        </StyledBuyButton>
                    </RenderIf>
                    <RenderIf isTrue={!isVirtual}>
                        <StyledBuyButton
                            className="btn btn-default btn-block btn-lg"
                            style={buttonStyles}
                        >
                            GET NOW
                        </StyledBuyButton>
                    </RenderIf>
                </div>
            </RenderIf>
            <RenderIf isTrue={!isFree}>
                <>
                    <RenderIf isTrue={isVirtual}>
                        <>
                            <div className="col-md-6 col-xs-12">
                                <StyledBuyButton className="btn btn-default btn-block btn-lg">
                                    <small>BUY NOW</small>
                                </StyledBuyButton>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <StyledBuyButton
                                    className="btn btn-default btn-block btn-lg"
                                    style={buttonStyles}
                                >
                                    <AddToCartIconContainer>
                                        <small>ADD TO CART</small>
                                        <StyledFaShoppingCart />
                                    </AddToCartIconContainer>
                                </StyledBuyButton>
                            </div>
                        </>
                    </RenderIf>
                    <RenderIf isTrue={!isVirtual}>
                        <>
                            <div className="col-lg-6 col-md-8 col-xs-12">
                                <StyledBuyButton
                                    className="btn btn-default btn-block btn-lg"
                                    style={buttonStyles}
                                >
                                    <AddToCartIconContainer>
                                        ADD TO CART
                                        <StyledFaShoppingCart />
                                    </AddToCartIconContainer>
                                </StyledBuyButton>
                            </div>
                        </>
                    </RenderIf>
                </>
            </RenderIf>
        </>
    );
};

export default BuyButtons;
