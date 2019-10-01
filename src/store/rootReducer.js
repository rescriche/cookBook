import { combineReducers } from 'redux'
import configReducer from './config/configReducer'

const rootReducer = combineReducers({
    config: configReducer
});

export default rootReducer;