import * as actionTypes from "./actionTypes";

export const ActionTrigger = (actionType, param = null, ...arg) => {
    return {
        type: actionTypes[actionType], param, ...arg
    }
};