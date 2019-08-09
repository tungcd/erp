import React, { Component } from 'react';
import './../../public/css/service/service.css';
import { Link } from "react-router-dom";


class ServiceItem extends Component {

    onDelete = (id) => {
        this.props.onDelete(id);
    }

    render() {
        const { item, index } = this.props;

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.facility}</td>
                <td>{item.element}</td>
                <td className="btn-action">
                    <Link
                        to={`/services/${item.id}/edit`}
                        className="btn btn-success mr-1"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger ml-2"
                        onClick={() => this.onDelete(item.id)}
                    >
                        delete
                        </button>
                </td>
            </tr>
        )
    }
}

export default ServiceItem;
