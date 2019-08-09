import React, { Component } from "react";
import "./../../public/css/header.css";
import { connect } from "react-redux";
import * as actions from "./../../redux/actions/index";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    toggle = () => {
        this.props.onToggle();
    };
    render() {
        return (
            <div className="header">
                <div className="navbar-header">
                    <div className="title_name">
                        <h3>Vmodev</h3>
                    </div>
                    <button
                        onClick={this.toggle}
                        type="button"
                        id="sidebarCollapse"
                        className="btn btn-primary navbar-btn"
                    >
                        <i className="glyphicon glyphicon-align-left"></i>
                    </button>
                    <div className="dropdown">
                        <a
                            className="app-nav__item"
                            href="#"
                            data-toggle="dropdown"
                            aria-label="Open Profile Menu"
                        >
                            <i className="fa fa-user fa-lg"></i>
                        </a>
                        <ul className="dropdown-menu settings-menu dropdown-menu-right">
                            <li>
                                <a className="dropdown-item" href="page-user.html">
                                    <i className="fa fa-cog fa-lg"></i> Settings
                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="page-user.html">
                                    <i className="fa fa-user fa-lg"></i> Profile
                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="page-login.html">
                                    <i className="fa fa-sign-out fa-lg"></i> Logout
                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggle: () => {
            dispatch(actions.TOGGLE());
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Header);
