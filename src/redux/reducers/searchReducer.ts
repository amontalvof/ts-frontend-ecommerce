const initialState = {
    searchValue: '',
};

type SearchDispatchTypes = {
    type: string;
    payload?: any;
};

export const searchReducer = (
    state = initialState,
    action: SearchDispatchTypes
) => {
    switch (action.type) {
        case 'TRIGGER_SEARCH':
            return { ...state, searchValue: action.payload };
        default:
            return state;
    }
};
