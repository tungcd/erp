import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import * as actions from '../../redux/actions/actionUsers';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmpty, isEmail } from 'validator';
import './../../public/css/user.css';
// import callApi from './../../utils/apiCaller';

const required = (value) => {
    if (isEmpty(value)) {
        return <small className="form-text text-danger">This field is required</small>;
    }
}

const email = (value) => {
    if (!isEmail(value)) {
        return <small className="form-text text-danger">Invalid email format</small>;
    }
}

const minLength = (value) => {
    if (value.trim().length < 10) {
        return <small className="form-text text-danger">Input must be at least 9 characters long</small>;
    }
}


class UserActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            role: 0,
            date: '',
            txtemail: '',
            phone: '',
            cmnd: '',
            address: '',
            status: true,
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditUser(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditting) {
            var { itemEditting } = nextProps;
            this.setState({
                id: itemEditting.id,
                name: itemEditting.name,
                txtemail: itemEditting.email,
                role: itemEditting.role,
                date: itemEditting.date,
                phone: itemEditting.phone,
                cmnd: itemEditting.cmnd,
                address: itemEditting.address,
                status: itemEditting.status,
            });
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var { id, txtemail, name, role, date, phone, cmnd, address, status } = this.state;
        var { history } = this.props;
        var user = {
            id, name, role, date, phone, cmnd, address, status,
            email: txtemail
        }
        if (id) {
            if (this.checkBtn.context._errors.length > 0) {
                alert('Lưu thất bại,vui lòng kiểm tra lại ! ');
            } else {
                this.props.onUpdateUser(user);
                history.goBack();
            }
        } else {

            if (this.checkBtn.context._errors.length > 0) {
                alert('Lưu thất bại,vui lòng kiểm tra lại ! ');
            } else {
                this.props.onAddUser(user);
                history.goBack();
            }
        }

    }


    render() {
        var { txtemail, name, date, phone, cmnd, address, status } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <Form onSubmit={e => this.onSave(e)} ref={c => { this.form = c }}>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 float">
                            <div>
                                <label className="label-input">Tên</label>
                                <Input
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={this.onChange}
                                    validations={[required]}
                                />
                            </div>
                            <div>
                                <label className="label-input">Vị Trí</label>
                                <select
                                    name="role"
                                    className="form-control select-input"
                                    required="required"
                                    onChange={this.onChange}
                                    validations={[required]}
                                >
                                    <option value="1">Nhân viên</option>
                                    <option value="2">Quản lý</option>
                                    <option value="3">Lễ tân</option>
                                    <option value="4">Khách hàng</option>
                                    <option value="5">Chủ cơ sở</option>
                                    <option value="6">Admin</option>

                                </select>

                                {/* <Input
                                    name="role"
                                    type="text"
                                    className="form-control"
                                    value={role}
                                    onChange={this.onChange}
                                    validations={[required]}
                                /> */}
                            </div>
                            <div>
                                <label className="label-input">Ngày Sinh</label>
                                <Input
                                    name="date"
                                    type="date"
                                    className="form-control date-input"
                                    value={date}
                                    onChange={this.onChange}
                                    validations={[required]}
                                />
                            </div>
                            <div>
                                <label className="label-input">Email</label>
                                <Input
                                    name="txtemail"
                                    type="text"
                                    className="form-control"
                                    value={email === '' ? '' : txtemail}
                                    onChange={this.onChange}
                                    validations={[required, email]}
                                />
                            </div>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 float">
                            <div>
                                <label className="label-input">Số Điện Thoại</label>
                                <Input
                                    name="phone"
                                    type="number"
                                    className="form-control"
                                    value={phone}
                                    onChange={this.onChange}
                                    validations={[required, minLength]}
                                />
                            </div>
                            <div>
                                <label className="label-input">Chứng Minh Nhân Dân</label>
                                <Input
                                    name="cmnd"
                                    type="number"
                                    className="form-control"
                                    value={cmnd}
                                    onChange={this.onChange}
                                    validations={[required, minLength]}
                                />
                            </div>
                            <div>
                                <label className="label-input">Địa Chỉ</label>
                                <Input
                                    name="address"
                                    type="text"
                                    className="form-control"
                                    value={address}
                                    onChange={this.onChange}
                                    validations={[required]}
                                />
                            </div>
                            <div>
                                <div className="checkbox">
                                    <label className="label-input">
                                        <input
                                            className="custom-control-input"
                                            type="checkbox"
                                            name="status"
                                            value={status}
                                            onChange={this.onChange}
                                            checked={status}
                                            
                                        />
                                        &nbsp;Đang Làm Việc
                        </label>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 float">
                            a
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 float">
                            <button className="btn btn-primary btn-block login btn-action-page  "
                                type="submit">Lưu lại</button>
                            <CheckButton style={{ display: 'none' }}
                                ref={c => { this.checkBtn = c }}
                            />
                            <Link
                                to="/user"
                                className="btn btn-success  btn-action-page ml-2" >
                                Trở lại</Link>

                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

const mapStatetoProp = state => {
    return {
        users: state.users,
        itemEditting: state.userEditting

    }
}

const mapDispatchToProp = dispatch => {
    return {
        onAddUser: user => {
            dispatch(actions.actAddUserRequest(user));
        },
        onEditUser: id => {
            dispatch(actions.actEditUserRequest(id));
        },
        onUpdateUser: user => {
            dispatch(actions.actUpdateUserRequest(user));
        }
    }
}

export default connect(mapStatetoProp, mapDispatchToProp)(UserActionPage);