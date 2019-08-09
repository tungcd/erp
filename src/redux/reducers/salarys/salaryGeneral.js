import * as types from '../../constants/index';


const initialState = [];

const salaryGeneral = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_SALARY_GENERAL:
            state = action.salarys;
            return [...state];
        default:
            return state;
    }
};

export default salaryGeneral;
