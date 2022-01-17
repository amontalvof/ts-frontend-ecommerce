interface IArrayItem {
    ruta: string;
}

export const checkIsAllowedRoute = <T extends IArrayItem>(
    array: T[],
    route: string
): boolean => {
    return !!array.find((item) => item.ruta === route);
};
