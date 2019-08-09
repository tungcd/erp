import React, { Component } from 'react';
// import SalaryGeneralItem from './SalaryGeneralItem';

class SalaryGeneral extends Component {

    constructor(props) {
        super(props);
        this.state = {
            select_year: '2010',
            select_month: '1',
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
        var select = {
            select_year: name === 'select_year' ? value : this.state.select_year,
            select_month: name === 'select_month' ? value : this.state.select_month,
        }
        console.log(select);
        this.props.onChange(select);
    }


    render() {
        return (
            <div>
                <h3>Tổng Hợp lương</h3>

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 m20">
                    <h2>Cơ sở</h2>
                    <select className="form-control select-facility"
                        name="select-facility"
                    // onChange={this.onChange}
                    >
                        <option value="0">Cơ sở Hà Nội</option>
                        <option value="1">Cơ sở Hồ Chí Minh</option>
                    </select>

                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <select className="form-control"
                        name='select_year'
                        value={this.state.select_year}
                        onChange={this.onChange}
                    >
                        {this.showYear()}
                    </select>

                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <select className="form-control"
                        name='select_month'
                        value={this.state.select_month}
                        onChange={this.onChange}
                    >
                        {this.showMonth()}
                    </select>
                </div>

                <table className="table table-bordered salary-general-table">
                    <thead>
                        <tr>
                            <th>Thông tin nhân viên</th>
                            <th>Số ngày công</th>
                            <th>Lương cơ bản</th>
                            <th>Lương chuyên cần</th>
                            <th>Số thao tác</th>
                            <th>Lương thao tác</th>
                            <th>Tổng lương</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        );
    }
    showMonth() {
        var result = [];
        for (var i = 0; i < 12; i++) {
            result[i] = <option key={i} value={`${i + 1}`}>Tháng {i + 1}</option>;
        }
        return result;
    }
    showYear() {
        var result = [];
        for (var i = 0; i < 10; i++) {
            result[i] = <option key={i} value={`${i + 2010}`}>Năm {i + 2010}</option>;
        }
        return result;
    }
}

export default SalaryGeneral;
