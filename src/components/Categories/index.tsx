import SubCategories from '../SubCategories';

const Categories = () => {
    return (
        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
            <h4>
                <a href="#" className="pixelCategorias">
                    Lorem Ipsum
                </a>
            </h4>
            <hr />
            <ul>
                <SubCategories />
            </ul>
        </div>
    );
};

export default Categories;
