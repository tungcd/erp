import * as types from './../constants/index';
import callApi from './../../utils/apiCaller';

export const TOGGLE = () => {
    return {
        type: types.TOGGLE,
    }
};
