import { useRef, useEffect, useCallback, MutableRefObject } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { white } from '../../constants';
import {
    Boton,
    ContenedorPrincipal,
    ContenedorSlideshow,
    Controles,
    Slide,
    TextoSlide,
} from './styles';

interface IElement {
    route: string;
    src: string;
    text: string;
    id: number;
}

interface ISlide {
    elements: IElement[];
    controles?: boolean;
    autoplay?: boolean;
    velocidad?: string;
    intervalo?: number;
}

const arrowStyles = {
    width: '25px',
    height: '25px',
    color: white,
    backgroundColor: 'rgba(0,0,0,.5)',
    borderRadius: '5px',
};

export const Slider = ({
    elements,
    controles = false,
    autoplay = false,
    velocidad = '500',
    intervalo = 5000,
}: ISlide) => {
    const slideshow = useRef(null) as MutableRefObject<any>;
    const intervaloSlideshow = useRef(null) as MutableRefObject<any>;

    const siguiente = useCallback(() => {
        // Comprobamos que el slideshow tenga elementos
        if (slideshow?.current?.children?.length > 0) {
            // console.log('Siguiente');

            // Obtenemos el primer elemento del slideshow.
            const primerElemento = slideshow.current.children[0];

            // Establecemos la transicion para el slideshow.
            slideshow.current.style.transition = `${velocidad}ms ease-out all`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth;

            // Movemos el slideshow
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            const transicion = () => {
                // Reiniciamos la posicion del Slideshow.
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                // Tomamos el primer elemento y lo mandamos al final.
                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener(
                    'transitionend',
                    transicion
                );
            };

            // Eventlistener para cuando termina la animacion.
            slideshow.current.addEventListener('transitionend', transicion);
        }
    }, [velocidad]);

    const anterior = () => {
        // console.log('Anterior');
        if (slideshow.current.children.length > 0) {
            // Obtenemos el ultimo elemento del slideshow.
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(
                ultimoElemento,
                slideshow.current.firstChild
            );

            slideshow.current.style.transition = 'none';
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = `${velocidad}ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    };

    useEffect(() => {
        if (autoplay) {
            intervaloSlideshow.current = setInterval(() => {
                siguiente();
            }, intervalo);

            // Eliminamos los intervalos
            slideshow.current.addEventListener('mouseenter', () => {
                clearInterval(intervaloSlideshow.current);
            });

            // Volvemos a poner el intervalo cuando saquen el cursor del slideshow
            slideshow.current.addEventListener('mouseleave', () => {
                intervaloSlideshow.current = setInterval(() => {
                    siguiente();
                }, intervalo);
            });
        }
    }, [autoplay, intervalo, siguiente]);

    return (
        <ContenedorPrincipal>
            <ContenedorSlideshow ref={slideshow}>
                {elements.map((item, index) => {
                    return (
                        <Slide key={`slide-${index}`}>
                            <Link to={item?.route || ''}>
                                <img src={item.src} alt={`item-${item.id}`} />
                            </Link>
                            <TextoSlide>
                                <p>{item?.text}</p>
                            </TextoSlide>
                        </Slide>
                    );
                })}
            </ContenedorSlideshow>
            {controles && (
                <Controles>
                    <Boton direction="left" onClick={anterior}>
                        <FaChevronLeft style={arrowStyles} />
                    </Boton>
                    <Boton direction="right" onClick={siguiente}>
                        <FaChevronRight style={arrowStyles} />
                    </Boton>
                </Controles>
            )}
        </ContenedorPrincipal>
    );
};
