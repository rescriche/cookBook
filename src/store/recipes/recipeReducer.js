import {ActionTypes as recipesActionsTypes} from './recipeConstants';
import {addItems} from '../../utils/recipes'

const initialState = {
    items: []
};

const reducer = (state = initialState, action) => {
    const payload = action.payload;
    switch (action.type) {
        case recipesActionsTypes.ADD_ITEM:
            console.log('payload', payload);
            return {
                ...state,
                items: [...state.items, payload.itemText]
            };
        default:
            return {
                ...state
            }
    }
};
export default reducer;