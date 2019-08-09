import React, { Component } from 'react';
import SalaryGeneral from './../../../components/salary/salary-general/SalaryGerenal';
import SalaryGeneralItem from './../../../components/salary/salary-general/SalaryGeneralItem';
import { connect } from 'react-redux';
import * as actions from './../../../redux/actions/actionSalary';

class SalaryGeneralPage extends Component {

    componentDidMount() {
        this.props.fetchAllUserSalary();
    }

    onChange(select) {
        console.log(select);
    }

    render() {
        var { salarys } = this.props;

        return (
            <div>
                <SalaryGeneral
                    onChange={this.onChange}
                >{this.showItem(salarys)}</SalaryGeneral>
            </div>
        )
    }

    showItem = (salarys) => {
        var result = null;
        // var { filter, services } = this.props;
        // currentPosts = services;

        // render service in table
        if (salarys.length > 0) {
            result = salarys.map((item, index) => {
                return <SalaryGeneralItem
                    key={index}
                    item={item}
                    index={index}
                // onDelete={this.onDelete}
                />
            })
        }
        return result;
    }

}

const mapStateToProp = state => {
    return {
        salarys: state.salaryGeneral
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllUserSalary: () => {
            dispatch(actions.actFetchSalaryGeneralRequest());
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(SalaryGeneralPage);
