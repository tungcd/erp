import * as types from './../constants/index';
import callApi from './../../utils/apiCaller';

export const actFetchUsersRequest = () => {
    return dispatch => {
        return callApi('users', 'GET', null).then(res => {
            dispatch(actFetchUsers(res.data));
        })
    }
};

export const actFetchUsers = users => {
    return {
        type: types.FETCH_USERS,
        users
    }
};

export const actAddUserRequest = user => {
    return dispatch => {
        return callApi('users', 'POST', user).then(res => {
            dispatch(actAddUser(res.data));
        })
    }
};

export const actAddUser = user => {
    return {
        type: types.ADD_USERS,
        user
    }
};

export const actDeleteUserRequest = id => {
    return dispatch => {
        return callApi(`users/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteUser(id));
        })
    }
}

export const actDeleteUser = id => {
    return {
        type: types.DELETE_USERS,
        id
    }
};

export const actEditUserRequest = id => {
    return dispatch => {
        return callApi(`users/${id}`, 'GET', null).then(res => {
            dispatch(actEditUser(res.data));
            console.log();

        });
    };
};

export const actEditUser = user => {
    return {
        type: types.EDIT_USERS,
        user
    }
};

export const actUpdateUserRequest = user => {
    return dispatch => {
        return callApi(`users/${user.id}`, 'PUT', user).then(res => {
            dispatch(actUpdateUser(res.data));
        });
    };
};

export const actUpdateUser = user => {
    return {
        type: types.UPDATE_USERS,
        user
    }
};

export const filterUser = (filter) => {
    return {
        type: types.FILTER_USER,
        filter
    }
};