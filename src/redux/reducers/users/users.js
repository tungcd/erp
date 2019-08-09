import * as types from './../../constants/index';

var findIndex = (users, id) => {
    var result = -1;
    users.forEach((user, index) => {
        if (user.id === id) result = index;
    });
    return result;
}

const initialState = [];

const users = (state = initialState, action) => {
    var index = 0;
    switch (action.type) {
        case types.FETCH_USERS:
            state = action.users;
            return [...state];
        case types.ADD_USERS:
            state.push(action.user);
            return [...state];
        case types.DELETE_USERS:
            var { id } = action;
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case types.UPDATE_USERS:
            index = findIndex(state, action.user.id);
            state[index] = action.user;
            return [...state];
        default:
            return [...state];
    }
};

export default users;