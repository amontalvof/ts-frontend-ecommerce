const initialState = {
    searchValue: '',
};

interface ISearchAction {
    type: string;
    payload?: string;
}

export const searchReducer = (state = initialState, action: ISearchAction) => {
    switch (action.type) {
        case 'TRIGGER_SEARCH':
            return { ...state, searchValue: action.payload };
        default:
            return state;
    }
};
