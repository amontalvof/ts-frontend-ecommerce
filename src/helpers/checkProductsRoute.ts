interface ICheckProductsRoute {
    isASubCategoryAllowedRoute: boolean;
    isACategoryAllowedRoute: boolean;
    subCategoryId: string;
}

const checkProductsRoute = ({
    subCategoryId,
    isASubCategoryAllowedRoute,
    isACategoryAllowedRoute,
}: ICheckProductsRoute): boolean => {
    if (subCategoryId !== '') {
        return !isASubCategoryAllowedRoute || !isACategoryAllowedRoute;
    }
    return !isACategoryAllowedRoute;
};

export default checkProductsRoute;
