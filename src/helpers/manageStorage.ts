export const setLocalStorageItem = <T>(itemName: string, data: T) => {
    localStorage.setItem(itemName, JSON.stringify(data));
};

export const getFromLocalStorageItem = (itemName: string) => {
    return localStorage.getItem(itemName);
};

export const removeLocalStorageItem = (itemName: string) => {
    return localStorage.removeItem(itemName);
};
