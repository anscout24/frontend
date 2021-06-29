import * as actionTypes from '../actions/actionTypes';

const initialState = {
    interval_jobcount: 15,
    backendStatus: false,
    error: null

};

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}


/**
 * General Update
 */


const setStateParams= (state,action) => {
    return updateObject(state,
        {...action.param}
    )
};


const reducer_main = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.TEST_BACKEND_CONNECTION_START: return setStateParams(state,action);
        case actionTypes.TEST_BACKEND_CONNECTION_SUCCESS: return setStateParams(state,action);
        case actionTypes.TEST_BACKEND_CONNECTION_FAILURE: return setStateParams(state,action);


        default:
            return state;
    }
};

export default reducer_main;