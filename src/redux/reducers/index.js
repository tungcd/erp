import { combineReducers } from 'redux';
import toggle from './toggle';
import service from './services/services';
import serviceEditting from './services/serviceEditting';
import serviceFilter from './services/serviceFilter';
import users from './users/users';
import userEditting from './users/userEditting';
import userFilter from './users/userFilter';
import salaryGeneral from './salarys/salaryGeneral';
import salaryManager from './salarys/salaryManager';

export default combineReducers({
    toggle,
    service,
    serviceEditting,
    serviceFilter,
    users,
    userEditting,
    userFilter,
    salaryGeneral,
    salaryManager
});
