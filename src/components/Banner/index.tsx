import { BannerContainer, TextoBanner } from './styles';
// TODO: Add parallax effect
const Banner = () => {
    return (
        <BannerContainer>
            <img
                src="https://res.cloudinary.com/a03m02f92/image/upload/v1644382547/ecommerce/banner/default_pgwsus.jpg"
                className="img-responsive"
                width="100%"
                alt="products-banner"
            />
            <TextoBanner position="textoDer">
                <h1>SPECIAL OFFERS</h1>
                <h2>
                    <strong>50% off</strong>
                </h2>
                <h3>Ends October 31</h3>
            </TextoBanner>
        </BannerContainer>
    );
};

export default Banner;
