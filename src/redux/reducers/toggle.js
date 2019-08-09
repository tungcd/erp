
import * as types from './../constants/index';

export default (state = true, action) => {
    switch (action.type) {
        case types.TOGGLE:
            return !state;
        default:
            return state;
    }
};

