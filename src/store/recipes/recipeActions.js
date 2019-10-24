import { ActionTypes as recipeActionTypes } from './recipeConstants'

function addItem( text ) {
    return {
        type: recipeActionTypes.ADD_ITEM,
        text
    }
}

export {
    addItem
}