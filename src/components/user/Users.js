import React, { Component } from 'react';
import './../../public/css/user.css';
import { Link } from "react-router-dom";
import Pagination from './../../components/pagination/Pagination';
// import UserItem from './UserItem';
// import Sort from './Sort';
// import ServiceItem from './ServiceItem';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterRole: 0,
            filterEmail: '',
            filterPhone: '',
            filterCMND: '',
            filterAddress: '',
            filterStatus: 0
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        var filter = {
            name: name === "filterName" ? value : this.state.filterName,
            role: name === "filterRole" ? value : this.state.filterRole,
            email: name === "filterEmail" ? value : this.state.filterEmail,
            phone: name === "filterPhone" ? value : this.state.filterPhone,
            cmnd: name === "filterCMND" ? value : this.state.filterCMND,
            address: name === "filterAddress" ? value : this.state.filterAddress,
            status: name === "filterStatus" ? value : this.state.filterStatus,

        }
        this.setState({
            [name]: value
        });
        this.props.onChange(filter);
    }

    render() {
        var { postsPerPage, totalPosts, paginate } = this.props;

        return (
            <div className="users-component">
                <h3>Danh sách người dùng</h3>
                <div className="mb-2">
                    <Link to='/users/add' className="btn btn-primary ">
                        Thêm sản phẩm
                </Link>
                </div>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={totalPosts}
                    paginate={paginate}
                />

                <table className="table table-bordered table-user">
                    <thead>
                        <tr>
                            <th className="thead">STT</th>
                            <th className="thead">ID</th>
                            <th className="thead">Tên</th>
                            <th className="thead">Vị Trí</th>
                            <th className="thead">Ngày Sinh</th>
                            <th className="thead thead-email">Email</th>
                            <th className="thead">SĐT</th>
                            <th className="thead">CMND</th>
                            <th className="thead">Địa Chỉ</th>
                            <th className="thead">Trạng Thái</th>
                            <th className="thead">Hợp Đồng</th>
                            <th className="thead">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <input type="text"
                                    className="form-control search-input"
                                    name="filterName"
                                    placeholder="Tìm kiếm"
                                    value={this.state.filterName}
                                    onChange={this.onChange}
                                />
                            </td>
                            <td>
                                <select className="form-control"
                                    name="filterRole"
                                    value={this.state.filterRole}
                                    onChange={this.onChange}
                                >
                                    <option value="0">Tất cả</option>
                                    <option value="1">Nhân viên</option>
                                    <option value="2">Quản lý</option>
                                    <option value="3">Lễ tân</option>
                                    <option value="4">Khách hàng</option>
                                    <option value="5">Chủ cơ sở</option>
                                    <option value="6">Admin</option>
                                </select>
                            </td>
                            <td></td>
                            <td>
                                <input type="text"
                                    className="form-control search-input"
                                    name="filterEmail"
                                    placeholder="Tìm kiếm"
                                    value={this.state.filterEmail}
                                    onChange={this.onChange}
                                />
                            </td>
                            <td>
                                <input type="text"
                                    className="form-control search-input"
                                    name="filterPhone"
                                    placeholder="Tìm kiếm"
                                    value={this.state.filterPhone}
                                    onChange={this.onChange}
                                />
                            </td>
                            <td>
                                <input type="text"
                                    className="form-control search-input"
                                    name="filterCMND"
                                    placeholder="Tìm kiếm"
                                    value={this.state.filterCMND}
                                    onChange={this.onChange}
                                />
                            </td>
                            <td>
                                <input type="text"
                                    className="form-control search-input"
                                    name="filterAddress"
                                    placeholder="Tìm kiếm"
                                    value={this.state.filterAddress}
                                    onChange={this.onChange}
                                />
                            </td>
                            <td>
                                <select
                                    className="form-control"
                                    name="filterStatus"
                                    value={this.state.filterStatus}
                                    onChange={this.onChange}
                                >
                                    <option value="-1">Tất cả</option>
                                    <option value="0">Đang làm việc</option>
                                    <option value="1">Đã nghỉ</option>
                                </select>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Users;
