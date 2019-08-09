import React from 'react';
import Chart from './pages/chart';
import ServicePage from './pages/servicePage/ServicePage';
import ServiceActionsPage from './pages/servicePage/ServiceActionsPage';
import Users from './pages/userPage/UsersPage';
import UserActionPage from './pages/userPage/userActionPage';
import UserContract from './pages/userPage/userContract';
import SalaryGeneralPage from './pages/salaryPage/salaryGeneralPage/SalaryGeneralPage';
import SalaryManagerPage from './pages/salaryPage/salaryManagerPage/SalaryManagerPage';

const routers = [
    {
        path: '/manage-facility',
        exact: false,
        main: () => <Chart />
    },
    {
        path: '/service',
        exact: true,
        main: () => <ServicePage />
    },
    {
        path: '/services/add',
        exact: false,
        main: ({ history }) => <ServiceActionsPage history={history} />
    },
    {
        path: '/services/:id/edit',
        exact: false,
        main: ({ match, history }) => <ServiceActionsPage match={match} history={history} />

    },
    {
        path: '/user',
        exact: false,
        main: () => <Users />

    },
    {
        path: '/users/add',
        exact: false,
        main: ({ history }) => <UserActionPage history={history} />
    },
    {
        path: '/users/:id/edit',
        exact: false,
        main: ({ match, history }) => <UserActionPage match={match} history={history} />

    },
    {
        path: '/users/:id/contract',
        exact: false,
        main: ({ match, history }) => <UserContract match={match} history={history} />

    },
    {
        path: '/salary-general',
        exact: false,
        main: () => <SalaryGeneralPage />

    },
    {
        path: '/salary-manager',
        exact: false,
        main: () => <SalaryManagerPage />

    }

];

export default routers;
