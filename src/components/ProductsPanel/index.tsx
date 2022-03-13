import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import { DisplayGridListBar } from '../DisplayGridListBar';
import { GridProducts } from '../GridProducts';
import { ListProducts } from '../ListProducts';
import RenderIf from '../RenderIf';
import { IProduct } from '../../interfaces/product';
import RelevantTitle from '../RelevantTitle';
import { Breadcrumb } from '../Breadcrumb';
import ThereAreNoProducts from '../ThereAreNoProducts';

interface IProductsPanelProps {
    title?: string;
    products?: IProduct[];
    seeMoreRoute?: string;
    sortDirection?: string;
    onSort?: React.Dispatch<React.SetStateAction<string>>;
    viewType: string;
    onChangeViewType: React.Dispatch<React.SetStateAction<string>>;
    displaySortDropdown?: boolean;
    displayBreadcrumb?: boolean;
}

export const ProductsPanel = ({
    title,
    products,
    seeMoreRoute,
    displaySortDropdown,
    sortDirection,
    onSort,
    viewType,
    onChangeViewType,
    displayBreadcrumb = false,
}: IProductsPanelProps) => {
    const state = useSelector((state: RootStore) => state);
    const { plantillaReducer } = state;
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];
    const existsProducts = products?.length !== 0;

    return (
        <>
            <DisplayGridListBar
                viewType={viewType}
                onChangeViewType={onChangeViewType}
                plantillaStyles={plantillaStyles}
                displaySortDropdown={displaySortDropdown}
                sortDirection={sortDirection}
                onSort={onSort}
            />
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <RenderIf isTrue={!!title}>
                            <RelevantTitle
                                title={title}
                                seeMoreRoute={seeMoreRoute}
                                plantillaStyles={plantillaStyles}
                            />
                        </RenderIf>
                        <RenderIf isTrue={displayBreadcrumb}>
                            <Breadcrumb />
                        </RenderIf>
                    </div>
                    <RenderIf isTrue={!existsProducts}>
                        <ThereAreNoProducts message="There are no products in this section yet." />
                    </RenderIf>
                    <RenderIf isTrue={existsProducts && viewType === 'grid'}>
                        <GridProducts products={products} />
                    </RenderIf>
                    <RenderIf isTrue={existsProducts && viewType === 'list'}>
                        <ListProducts products={products} />
                    </RenderIf>
                </div>
            </div>
        </>
    );
};
