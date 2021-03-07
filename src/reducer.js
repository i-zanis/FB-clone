// Reducer initial state
export const initialState = {
    user: null,
};
// Dispatch action into the Data Layer
export const actionTypes = {
    SET_USER: "SET_USER",
};
// Reducer if received action -> return new Data Layer
// Return new Data Layer, Change user to passed value
// Else return state
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state, user: action.user,
            };
        default:
            return state;
    }
};

export default reducer;