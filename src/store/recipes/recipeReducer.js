import {ActionTypes as recipesActionsTypes} from './recipeConstants';

const initialState = {
    items: [],
    error: false,
    pending: false
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case recipesActionsTypes.ADD_ITEM_PENDING:
            return {
                ...state,
                pending: true
            }
        case recipesActionsTypes.ADD_ITEM_REJECTED:
            return {
                ...state,
                pending: false,
                error: true
            }
        case recipesActionsTypes.ADD_ITEM_FULFILLED:
            return {
                ...state,
                pending: false,
                error: false
            }
        default:
            return {
                ...state
            }
    }
};
export default reducer;