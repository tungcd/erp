import * as types from './../constants/index';
import callApi from './../../utils/apiCaller';

export const actFetchSalaryGeneralRequest = () => {
    return (dispatch) => {
        return callApi('salarys', 'GET', null).then(res => {
            dispatch(actFetchSalaryGeneral(res.data));
        });
    };
};

export const actFetchSalaryGeneral = salarys => {
    return {
        type: types.FETCH_SALARY_GENERAL,
        salarys
    }
};

export const actFetchSalarManagerRequest = () => {
    return (dispatch) => {
        return callApi('salary', 'GET', null).then(res => {
            dispatch(actFetchSalarManager(res.data));
        });
    };
};

export const actFetchSalarManager = salarys => {
    return {
        type: types.FETCH_SALARY_MAGAGER,
        salarys
    }
};