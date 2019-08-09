import * as types from '../../constants/index';


var initialState = {};

const serviceEditting = (state = initialState, action) => {

    switch (action.type) {
        case types.EDIT_SERVICES:
            return action.service;
        default: return state;
    }
};

export default serviceEditting;