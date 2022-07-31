import useMediaQuery from '../../hooks/useMediaQuery';
import { TitleContainer } from './styles';

const Title = ({ titulo }: { titulo: string }) => {
    const isLarge = useMediaQuery('(min-width: 767px)');
    const titleAlign = isLarge ? 'text-left' : 'text-center';
    return (
        <TitleContainer className="col-sm-4 col-xs-12 ">
            <br />
            <p className={`tituloCarritoCompra ${titleAlign}`}>{titulo}</p>
        </TitleContainer>
    );
};

export default Title;
