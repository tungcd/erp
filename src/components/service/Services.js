import React, { Component } from 'react';
import './../../public/css/service/service.css';
import { Link } from "react-router-dom";
import Pagination from '../pagination/Pagination';

class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterPrice: 0,
            filterFacility: '',
            filterElement: '',
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        var filter = {
            name: name === 'filterName' ? value : this.state.filterName,
            price: name === 'filterPrice' ? value : this.state.filterPrice,
            facility: name === 'filterFacility' ? value : this.state.filterFacility,
            element: name === 'filterElement' ? value : this.state.filterStatus
        }
        this.setState({
            [name]: value
        });
        this.props.onChange(filter);
        // console.log(this.state);

    }

    render() {
        var { postsPerPage, totalPosts, paginate } = this.props;
        // console.log(filter);
        return (
            <div className="services-component">
                <h3 className="pl-2">Bảng dịch vụ</h3>
                <div className="mb-2">
                    <Link to='/services/add' className="btn btn-primary ">
                        Thêm sản phẩm
                </Link>
                </div>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={totalPosts}
                    paginate={paginate}
                />
                <table className="table table-bordered table-services">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Mã SP</th>
                            <th scope="col">Tên SP</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Cơ Sở</th>
                            <th scope="col">Thành Phần</th>
                            <th scope="col">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td />
                            <td />
                            <td>
                                <input type="text"
                                    className="form-control search-input"
                                    name="filterName"
                                    placeholder="Tìm theo tên SP"
                                    value={this.state.filterName}
                                    onChange={this.onChange}
                                />
                            </td>
                            <td>
                                <input type="number"
                                    className="form-control search-input"
                                    name="filterPrice"
                                    placeholder="Tìm theo giá SP"
                                    value={this.state.filterPrice > 0 ? this.state.filterPrice : ''}
                                    onChange={this.onChange}

                                />
                            </td>
                            <td>
                                <input type="text"
                                    className="form-control search-input"
                                    name="filterFacility"
                                    placeholder="Tìm theo cơ sở"
                                    value={this.state.filterFacility}
                                    onChange={this.onChange}
                                />
                            </td><td>
                                <input type="text"
                                    className="form-control search-input"
                                    name="filterElement"
                                    placeholder="Tìm theo thành phần"
                                    value={this.state.filterElement}
                                    onChange={this.onChange}
                                />
                            </td>
                            <td />
                        </tr>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Services;
