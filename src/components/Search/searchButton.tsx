import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RenderIf } from '../RenderIf';

interface ISearchButtonProps {
    isInputSearchValueNotEmpty: boolean;
    routeSearch: string;
    searchStyles: React.CSSProperties;
    onClick: () => void;
}
const SearchButton = ({
    isInputSearchValueNotEmpty,
    routeSearch,
    searchStyles,
    onClick,
}: ISearchButtonProps) => {
    return (
        <>
            <RenderIf isTrue={isInputSearchValueNotEmpty}>
                <Link to={`/search/${routeSearch}?page=1`}>
                    <button
                        onClick={onClick}
                        className="btn btn-default"
                        style={{ ...searchStyles, outline: 'none' }}
                    >
                        <FaSearch />
                    </button>
                </Link>
            </RenderIf>
            <RenderIf isTrue={!isInputSearchValueNotEmpty}>
                <button
                    onClick={onClick}
                    className="btn btn-default"
                    style={{ ...searchStyles, outline: 'none' }}
                >
                    <FaSearch />
                </button>
            </RenderIf>
        </>
    );
};

export default SearchButton;
