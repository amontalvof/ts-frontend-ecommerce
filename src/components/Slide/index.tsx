import { useRef, useEffect, useCallback, MutableRefObject } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './styles.scss';

interface IElement {
    to?: string;
    src: string;
    text?: string;
    textStyle?: React.CSSProperties;
    id: number;
}

interface ISlide {
    elements: IElement[];
    controles?: boolean;
    autoplay?: boolean;
    velocidad?: string;
    intervalo?: number;
    arrowStyles?: React.CSSProperties;
}

const Slide = ({
    elements,
    controles = false,
    autoplay = false,
    velocidad = '500',
    intervalo = 5000,
    arrowStyles,
}: ISlide) => {
    const slideshow = useRef(null) as MutableRefObject<any>;
    const intervaloSlideshow = useRef(null) as MutableRefObject<any>;

    const siguiente = useCallback(() => {
        // Comprobamos que el slideshow tenga elementos
        if (slideshow.current.children.length > 0) {
            console.log('Siguiente');

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
        console.log('Anterior');
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
        <div id="ContenedorPrincipal">
            <div id="ContenedorSlideshow" ref={slideshow}>
                {elements.map((item) => {
                    return (
                        <div className="Slide" key={item.id}>
                            <Link to={item?.to || ''}>
                                <img src={item.src} alt={`item-${item.id}`} />
                            </Link>
                            <div className="TextoSlide" style={item?.textStyle}>
                                <p>{item?.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            {controles && (
                <div id="Controles">
                    <button className="Boton ArrowLeft" onClick={anterior}>
                        <FaChevronLeft style={arrowStyles} />
                    </button>
                    <button className="Boton ArrowRight" onClick={siguiente}>
                        <FaChevronRight style={arrowStyles} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Slide;
