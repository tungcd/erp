import * as types from '../../constants/index';


var initialState = {};

const userEditting = (state = initialState, action) => {

    switch (action.type) {
        case types.EDIT_USERS:
            return action.user;
        default: return state;
    }
};

export default userEditting;