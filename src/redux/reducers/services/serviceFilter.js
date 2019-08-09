import * as types from '../../constants/index';


var initialState = {
    name: '',
    price: 0,
    facility: '',
    element: '',
};

const serviceFilter = (state = initialState, action) => {

    switch (action.type) {
        case types.FILTER_SERVICES:
            // console.log(action.filter);

            return action.filter;
        default: return state;
    }
};

export default serviceFilter;