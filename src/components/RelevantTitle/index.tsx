import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { ShowMoreButtonContainer, TituloDestacadoContainer } from './styles';
import { TStyle } from '../../interfaces/plantilla';
interface IRelevantTitleProps {
    title?: string;
    seeMoreRoute?: string;
    plantillaStyles: TStyle;
}
const RelevantTitle = ({
    title = '',
    seeMoreRoute = '',
    plantillaStyles,
}: IRelevantTitleProps) => {
    return (
        <>
            <TituloDestacadoContainer className="col-xs-12">
                <div className="col-sm-6 col-xs-12">
                    <h1>
                        <small>{title}</small>
                    </h1>
                </div>
                <div className="col-sm-6 col-xs-12">
                    <Link to={`${seeMoreRoute}?page=1`}>
                        <button
                            className="btn btn-default pull-right"
                            style={{
                                outline: 'none',
                                backgroundColor: plantillaStyles.colorFondo,
                                color: plantillaStyles.colorTexto,
                            }}
                        >
                            <ShowMoreButtonContainer>
                                SEE MORE{' '}
                                <FaChevronRight
                                    style={{
                                        marginLeft: '5px',
                                        color: plantillaStyles.colorTexto,
                                    }}
                                />
                            </ShowMoreButtonContainer>
                        </button>
                    </Link>
                </div>
            </TituloDestacadoContainer>
            <div className="clearfix" />
            <hr />
        </>
    );
};

export default RelevantTitle;
