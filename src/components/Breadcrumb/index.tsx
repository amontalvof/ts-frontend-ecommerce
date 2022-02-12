import RenderIf from '../RenderIf';

interface IBreadcrumbProps {
    categoria?: string;
    subcategoria?: string;
}

const Breadcrumb = ({ categoria, subcategoria }: IBreadcrumbProps) => {
    const isSubcategoria = subcategoria !== '';
    return (
        <ul className="breadcrumb fondoBreadcrumb text-uppercase">
            <li>{categoria}</li>
            <RenderIf isTrue={isSubcategoria}>
                <li className="active pagActiva">{subcategoria}</li>
            </RenderIf>
        </ul>
    );
};

export default Breadcrumb;
