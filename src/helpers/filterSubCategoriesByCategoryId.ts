import { TSubCategories } from '../interfaces/subCategories';

export const filterSubCategoriesByCategoryId = (
    subCategories: TSubCategories = [],
    categoryId: number
): TSubCategories => {
    const filteredSubCategories = subCategories.filter(
        (item) => item.id_categoria === categoryId
    );
    return filteredSubCategories;
};
