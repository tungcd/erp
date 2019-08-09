import React, { Component } from 'react';
import './../../../public/css/salary.css';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

class SalaryManagerItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })

    }

    render() {
        var { name, address, birth, gender, phone, salary } = this.props.item;
        // console.log(this.state);
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
                {this.showDay(salary)}
                <td>
                    <CheckButton className="btn btn-primary btn-block login btn-action-page "
                        ref={c => { this.checkBtn = c }}
                    >
                        Lưu lại
                    </CheckButton>
                </td>
            </tr>
        );
    }
    showDay(salary) {
        var result = [];
        for (var i = 0; i < 31; i++) {
            result[i] = <td key={i}>
                <label>Giờ vào :</label>
                <Input
                    name={`check_in${i + 1}`}
                    type="time"
                    className="form-control check-in"
                    value={this.changeToHours(salary[i].check_in)}
                    onChange={this.onChange}
                // validations={[required]}
                />
                <label className="label-check-out">Giờ ra :</label>
                <Input
                    name={`check_out${i + 1}`}
                    type="time"
                    className="form-control check-out"
                    value={this.changeToHours(salary[i].check_out)}
                    onChange={this.onChange}
                // validations={[required]}
                />
                <label className="label-check-box">Nghỉ phép :</label>
                <Input
                    name={`work_off${i + 1}`}
                    type="checkbox"
                    className="form-control check-box"
                    value={salary[i].work_off}
                    checked={salary[i].work_off}
                    onChange={this.onChange}
                // validations={[required]}
                />
            </td>;
        }
        return result;
    }

    changeToHours(num) {
        var hour = parseInt(num) / 1;
        if (hour < 10) {
            hour = '0' + hour;
        }
        var minute = num % 1;
        minute = minute.toFixed(10);
        minute *= 60;
        if (minute < 10) {
            minute = '0' + minute;
        }
        return hour + ':' + minute;
    }
}

export default SalaryManagerItem;
