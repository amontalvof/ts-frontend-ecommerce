import filterCategoriesByRoute from './filterCategoriesByRoute';

interface IArrayItem {
    ruta: string;
}

export const checkIsAllowedRoute = <T extends IArrayItem>(
    array: T[],
    route: string
): boolean => {
    return !!filterCategoriesByRoute(array, route);
};
