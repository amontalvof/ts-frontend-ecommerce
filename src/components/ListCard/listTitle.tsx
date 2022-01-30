import {
    StyledTitle,
    StyledLink,
    StyledBadge,
    TitleContentContainer,
} from './styles';

interface IListTitleProps {
    ruta: string;
    titulo: string;
    descuentoOferta?: number;
    nuevo?: boolean;
    descripcion: string;
}
const ListTitle = ({
    ruta,
    titulo,
    descuentoOferta,
    nuevo,
    descripcion,
}: IListTitleProps) => {
    const showBadge = descuentoOferta || nuevo;
    const newText = nuevo && 'New';
    const discountText = descuentoOferta && `${descuentoOferta}% off`;
    return (
        <>
            <StyledTitle>
                <small>
                    <StyledLink to={ruta}>
                        <TitleContentContainer>
                            {titulo}
                            {showBadge && (
                                <>
                                    <StyledBadge className="label">
                                        {newText}
                                    </StyledBadge>{' '}
                                    <StyledBadge className="label">
                                        {discountText}
                                    </StyledBadge>
                                </>
                            )}
                        </TitleContentContainer>
                    </StyledLink>
                </small>
            </StyledTitle>
            <p className="text-muted">{descripcion}</p>
        </>
    );
};

export default ListTitle;
