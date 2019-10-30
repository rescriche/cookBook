import { ActionTypes as recipeActionTypes } from './recipeConstants'

function addItem( itemText ) {
    return {
        type: recipeActionTypes.ADD_ITEM,
        payload: {
            itemText
        }
    }
}

export {
    addItem
}