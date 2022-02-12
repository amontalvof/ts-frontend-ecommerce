interface IArrayItem {
    ruta: string;
}
const filterCategoriesByRoute = <T extends IArrayItem>(
    array: T[],
    route: string
) => {
    return array.find((item) => item.ruta === route);
};

export default filterCategoriesByRoute;
