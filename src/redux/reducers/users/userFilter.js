import * as types from '../../constants/index';


var initialState = {
    name: '',
    role: '0',
    email: '',
    phone: '',
    cmnd: '',
    address: '',
    status: '-1',
};

const userFilter = (state = initialState, action) => {

    switch (action.type) {
        case types.FILTER_USER:
            return action.filter;
        default: return state;
    }
};

export default userFilter;