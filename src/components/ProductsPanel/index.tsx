import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import DisplayGridListBar from '../DisplayGridListBar';
import GridProducts from '../GridProducts';
import ListProducts from '../ListProducts';
import RenderIf from '../RenderIf';
import { IProduct } from '../../interfaces/product';
import RelevantTitle from '../RelevantTitle';
import Breadcrumb from '../Breadcrumb';

interface IProductsPanelProps {
    title?: string;
    products?: IProduct[];
    seeMoreRoute?: string;
    displayOrderDropdown?: boolean;
    displayBreadcrumb?: boolean;
    categoria?: string;
    subcategoria?: string;
}

const ProductsPanel = ({
    title,
    products,
    seeMoreRoute,
    displayOrderDropdown,
    displayBreadcrumb = false,
    categoria = '',
    subcategoria = '',
}: IProductsPanelProps) => {
    const [display, setDisplay] = useState<string>('grid');
    const state = useSelector((state: RootStore) => state);
    const { plantillaReducer } = state;
    const { styles = [] } = plantillaReducer;
    const plantillaStyles = styles[0];

    return (
        <>
            <DisplayGridListBar
                display={display}
                changeDisplay={setDisplay}
                plantillaStyles={plantillaStyles}
                displayOrderDropdown={displayOrderDropdown}
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
                            <Breadcrumb
                                categoria={categoria}
                                subcategoria={subcategoria}
                            />
                        </RenderIf>
                    </div>
                    <RenderIf isTrue={display === 'grid'}>
                        <GridProducts products={products} />
                    </RenderIf>
                    <RenderIf isTrue={display === 'list'}>
                        <ListProducts products={products} />
                    </RenderIf>
                </div>
            </div>
        </>
    );
};

export default ProductsPanel;
