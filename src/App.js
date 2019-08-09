import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import routers from "./routers";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div className="app-body">
                        <Sidebar />
                        <div className={this.props.toggle ? "main" : "left-closed"}>
                            <div className="content">
                                <Switch>
                                    {this.ShowContentSideBar(routers)}
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }

    ShowContentSideBar = (routers) => {
        var result = null;
        result = routers.map((router, index) => {
            // console.log(router);
            
            return (
                <Route
                    key={index}
                    path={router.path}
                    exact={router.exact}
                    component={router.main}
                />
            )
        })
        return result;
    }
}

const mapStateToProps = state => {
    return {
        toggle: state.toggle
    };
};

export default connect(mapStateToProps)(App);
