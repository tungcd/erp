import React, { Component } from 'react';
import SalaryManager from '../../../components/salary/salary-manager/SalaryManager';
import SalaryManagerItem from '../../../components/salary/salary-manager/SalaryManagerlItem';
import { connect } from 'react-redux';
import * as actions from './../../../redux/actions/actionSalary';

class SalaryManagerPage extends Component {

    onChange(select) {
        console.log(select);
    }

    componentDidMount() {
        this.props.fetchAllUserSalary();
    }

    render() {
        var { salarys } = this.props;
        // console.log(salarys);

        return (
            <div>
                <SalaryManager
                    onChange={this.onChange}
                >{this.showItem(salarys)}</SalaryManager>
            </div>
        )
    }
    showItem = (salarys) => {
        var result = null;
        // console.log(salarys.length);

        if (salarys.length > 0) {
            result = salarys.map((item, index) => {
                return <SalaryManagerItem
                    key={index}
                    item={item}
                    index={index}
                />
            })
        }
        return result;
    }
}

const mapStateToProp = state => {
    return {
        salarys: state.salaryManager
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUserSalary: () => {
            dispatch(actions.actFetchSalarManagerRequest());
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(SalaryManagerPage);





