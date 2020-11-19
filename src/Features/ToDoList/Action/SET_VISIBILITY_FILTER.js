export const setVisibilityFilter = filter => ({
    type: "SET_VISIBILITY_FILTER",
    filter
});

export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_VISIBILITY_FILTER":
            return { ...state, filter: action.filter };
        default:
            return state;
    }
};
