import {ActionTypes as ConfigAction} from './configConstants';

const initialState = {
    config: undefined,
    error: false
};
const reducer = (state = initialState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case ConfigAction.FETCH_CONFIG_FULFILLED:
            return {
                ...state,
                config: false
            }
        case ConfigAction.FETCH_CONFIG_REJECTED:
            return {
                ...state,
                error: true
            }

        default:
            return {
                ...state
            }
    }
};
export default reducer;