import * as types from '../../constants/index';

var findIndex = (services, id) => {
    var result = -1;
    services.forEach((service, index) => {
        if (service.id === id) result = index;
    });
    return result;
}

const initialState = [];

const service = (state = initialState, action) => {
    var index = -1;
    var { id } = action;
    switch (action.type) {
        case types.FETCH_SERVICES:
            state = action.services;
            return [...state];
        case types.ADD_SERVICES:
            state.push(action.service);
            return [...state];
        case types.DELETE_SERVICES:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case types.UPDATE_SERVICES:
                index = findIndex(state, action.service.id);
                state[index] = action.service;
            return [...state];
        default:
            return state;
    }
};

export default service;
