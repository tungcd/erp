import React, { Component } from 'react';
import './../../public/css/user.css';
import { Link } from "react-router-dom";


class UserItem extends Component {

    onDelete = id => {
        this.props.onDelete(id);
    }

    render() {
        const { user, index } = this.props;

        return (
            <tr>
                <th scope="col">{index + 1}</th>
                <th scope="col">{user.id}</th>
                <th scope="col">{user.name}</th>
                <th scope="col">{this.checkbox(user.role)}</th>
                <th scope="col">{user.date}</th>
                <th scope="col">{user.email}</th>
                <th scope="col">{user.phone}</th>
                <th scope="col">{user.cmnd}</th>
                <th scope="col">{user.address}</th>

                <th scope="col" className="">{user.status ? 'Đang làm việc' : 'Đã nghỉ'}</th>
                <th scope="col">
                    <Link
                        to={`/users/${user.id}/contract`}
                    // className="btn btn-success mr-1"
                    >
                        Chi tiết
                    </Link>
                </th>
                <td className="btn-action">
                    <Link
                        to={`/users/${user.id}/edit`}
                        className="btn btn-success mr-1"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger ml-2"
                        onClick={() => this.onDelete(user.id)}
                    >
                        delete
                        </button>
                </td>
            </tr>
        )
    }
    checkbox(role) {
        var result = parseInt(role);
        switch (result) {
            case 1: return 'Nhân viên';
            case 2: return 'Quản Lý';
            case 3: return 'Lễ tân';
            case 4: return 'Khách hàng';
            case 5: return 'Chủ cơ sở';
            case 6: return 'Admin';
            default: return '';
        }
    }
}

export default UserItem;
