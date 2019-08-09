import * as types from './../constants/index';
import callApi from './../../utils/apiCaller';

export const actFetchServicesRequest = () => {
    return (dispatch) => {
        return callApi('services', 'GET', null).then(res => {
            dispatch(actFetchServices(res.data));
        });
    };
};

export const actFetchServices = services => {
    return {
        type: types.FETCH_SERVICES,
        services
    }
};

export const actAddServicecsRequest = service => {
    return dispatch => {
        return callApi('services', 'POST', service).then(res => {
            dispatch(actAddServicecs(res.data));
        });
    };
};

export const actAddServicecs = service => {
    return {
        type: types.ADD_SERVICES,
        service
    }
};

export const actEditServicesRequest = id => {
    return dispatch => {
        return callApi(`services/${id}`, 'GET', null).then(res => {
            dispatch(actEditServices(res.data));
        });
    };
};

export const actEditServices = service => {
    return {
        type: types.EDIT_SERVICES,
        service
    }
};

export const actUpdateServiceRequest = service => {
    return dispatch => {
        return callApi(`services/${service.id}`, 'PUT', service).then(res => {
            dispatch(actUpdateService(res.data));
        });
    };
};

export const actUpdateService = service => {
    return {
        type: types.UPDATE_SERVICES,
        service
    }
};

export const actDeleteServiceRequest = id => {
    return (dispatch) => {
        return callApi(`services/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteService(id));
        });
    };
};

export const actDeleteService = id => {
    return {
        type: types.DELETE_SERVICES,
        id
    }
};

export const filterService = (filter) => {
    return {
        type: types.FILTER_SERVICES,
        filter
    }
};