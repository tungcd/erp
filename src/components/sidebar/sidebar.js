import React, { Component } from "react";
import "./../../public/css/sidebar.css";
import { Route, Link } from "react-router-dom";

const sidebars = [
    {
        label: "Thống kê báo cáo",
        to: '/',
        activeOnlyWhenExact: true,
        icon: 'fas fa-tachometer-alt'
    },
    {
        label: "Quản lý cơ sở",
        to: '/manage-facility',
        activeOnlyWhenExact: false,
        icon: 'fas fa-tasks'
    },
    {
        label: "Quản lý nhân viên",
        to: '/page2',
        activeOnlyWhenExact: false,
        icon: 'fas fa-address-book'
    },
    {
        label: "Quản lý khách hàng",
        to: '/page3',
        activeOnlyWhenExact: false,
        icon: 'fas fa-users'
    },
    {
        label: "Quản lý dịch vụ",
        to: '/service',
        activeOnlyWhenExact: false,
        icon: 'fab fa-servicestack'
    },
    {
        label: "Quản lý chấm công",
        to: '/salary-manager',
        activeOnlyWhenExact: false,
        icon: 'glyphicon glyphicon-send'
    }, {
        label: "Tổng hợp lương",
        to: '/salary-general',
        activeOnlyWhenExact: false,
        icon: ' fas fa-file-invoice-dollar'
    },
    {
        label: "Quản lý người dùng",
        to: '/user',
        activeOnlyWhenExact: false,
        icon: 'fas fa-users-cog'
    }
]

const SideBarLink = ({ label, to, activeOnlyWhenExact, icon }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';

                return (
                    <li className={active}>
                        <Link to={to}
                        >
                            <i className={icon}></i>
                            &ensp;{label}
                        </Link>
                    </li>
                );
            }} />
    )
}

class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar">
                <ul className="list-unstyled components">
                    {this.showSideBar(sidebars)}
                </ul>
            </div>
        );
    }

    showSideBar = (sidebars) => {
        var result = null;
        result = sidebars.map((sidebar, index) => {
            return (

                <SideBarLink
                    key={index}
                    to={sidebar.to}
                    label={sidebar.label}
                    activeOnlyWhenExact={sidebar.exact}
                    icon={sidebar.icon}
                />
            )
        });
        return result;
    }

}

export default Sidebar;
