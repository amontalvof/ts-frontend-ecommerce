import Slider from '../../components/Slide';
import './styles.scss';

const elements = [
    {
        id: 1,
        src: 'https://res.cloudinary.com/a03m02f92/image/upload/v1642398328/ecommerce/slide/1_ngf8q9.jpg',
        text: 'Deals & Promotions on watches',
        textStyle: { backgroundColor: 'rgba(0,0,0,.5)', color: '#fff' },
        to: '/accessories/watches',
    },
    {
        id: 2,
        src: 'https://res.cloudinary.com/a03m02f92/image/upload/v1642398328/ecommerce/slide/2_ofmisq.jpg',
        text: 'Deals & Promotions on watches',
        textStyle: { backgroundColor: 'rgba(0,0,0,.5)', color: '#fff' },
        to: '/accessories/watches',
    },
    {
        id: 3,
        src: 'https://res.cloudinary.com/a03m02f92/image/upload/v1642398328/ecommerce/slide/3_rhutml.jpg',
        text: 'Deals & Promotions on watches',
        textStyle: { backgroundColor: 'rgba(0,0,0,.5)', color: '#fff' },
        to: '/accessories/watches',
    },
    {
        id: 4,
        src: 'https://res.cloudinary.com/a03m02f92/image/upload/v1642398328/ecommerce/slide/4_ddx9zd.jpg',
        text: 'Deals & Promotions on watches',
        textStyle: { backgroundColor: 'rgba(0,0,0,.5)', color: '#fff' },
        to: '/accessories/watches',
    },
];

const arrowStyles = {
    width: '25px',
    height: '25px',
    color: '#fff',
};

const Main = () => {
    return (
        <div>
            <div id="SliderContainer">
                <Slider
                    elements={elements}
                    controles
                    // autoplay
                    arrowStyles={arrowStyles}
                    velocidad="800"
                />
            </div>
        </div>
    );
};

export default Main;
