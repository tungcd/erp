import React, { Component } from 'react';
import './../../../public/css/salary.css';

class SalaryGeneralItem extends Component {

    render() {
        var { name, address, birth, gender, phone, word_day, salary_contract, service } = this.props.item;

        return (
            <tr className="salary-general-item">
                <td>
                    <ul type="none" >
                        <li><i className="fas fa-user-alt"></i>&emsp;{name}</li>
                        <li><i className="fas fa-building"></i>&emsp;{address}</li>
                        <li><i className="fas fa-birthday-cake"></i>&emsp;{birth}</li>
                        <li><i className="fas fa-venus-mars"></i>&emsp;{gender}</li>
                        <li><i className="fas fa-mobile-alt"></i>&emsp; {phone}</li>
                    </ul>
                </td>
                <td>{word_day}</td>
                <td>{salary_contract}</td>
                <td>{word_day * salary_contract}</td>
                <td>{service}</td>
                <td>{service * 10}</td>
                <td>{service * 10 + word_day * salary_contract}</td>
            </tr>
        );
    }
}

export default SalaryGeneralItem;
