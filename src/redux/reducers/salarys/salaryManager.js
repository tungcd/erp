import * as types from '../../constants/index';


const initialState = [];

const salaryManager = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_SALARY_MAGAGER:
            state = action.salarys;
            return [...state];
        default:
            return state;
    }
};

export default salaryManager;
