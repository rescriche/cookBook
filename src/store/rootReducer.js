import { combineReducers } from 'redux'
import recipeReducer from './recipes/recipeReducer'

const rootReducer = combineReducers({
    recipes: recipeReducer
});

export default rootReducer;