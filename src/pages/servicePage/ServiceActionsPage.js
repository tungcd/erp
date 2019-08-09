import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
// import callApi from './../../utils/apiCaller';
import * as actions from '../../redux/actions/actionServices';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmpty } from 'validator';
import './../../public/css/service/service.css';

const required = (value) => {
    if (isEmpty(value)) {
        return <small className="form-text text-danger">This field is required</small>;
    }
}

class ServiceActionsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            numPrice: '',
            txtFacility: '',
            txtElement: '',

        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditService(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditting) {
            var { itemEditting } = nextProps;
            this.setState({
                id: itemEditting.id,
                txtName: itemEditting.name,
                numPrice: itemEditting.price,
                txtFacility: itemEditting.facility,
                txtElement: itemEditting.element
            });
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var { id, txtName, numPrice, txtFacility, txtElement } = this.state;
        var { history } = this.props;
        var service = {
            id: id,
            name: txtName,
            price: numPrice,
            facility: txtFacility,
            element: txtElement
        };

        if (id) {
            if (this.checkBtn.context._errors.length > 0) {
                alert('Lưu thất bại,vui lòng kiểm tra lại ! ');
            } else {
                this.props.onUpdateService(service);
                history.goBack();
            }
        } else {
            if (this.checkBtn.context._errors.length > 0) {
                alert('Lưu thất bại,vui lòng kiểm tra lại ! ');
            } else {
                this.props.onAddService(service);
                history.goBack();
            }
        }
    }

    render() {
        var { txtName, numPrice, txtFacility, txtElement } = this.state;

        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4  ">
                <Form onSubmit={e => this.onSave(e)} ref={c => { this.form = c }}>
                    <div>
                        <label>Tên Sản Phẩm</label>
                        <Input
                            name="txtName"
                            type="text"
                            className="form-control"
                            value={txtName}
                            onChange={this.onChange}
                            validations={[required]}
                        />
                    </div>
                    <div>
                        <label>Giá Sản Phẩm</label>
                        <Input
                            name="numPrice"
                            type="number"
                            className="form-control"
                            value={numPrice}
                            onChange={this.onChange}
                            validations={[required]}
                        />
                    </div>
                    <div>
                        <label>Cơ Sở</label>
                        <Input
                            name="txtFacility"
                            type="text"
                            className="form-control"
                            value={txtFacility}
                            onChange={this.onChange}
                            validations={[required]}
                        />
                    </div>
                    <div>
                        <label>Thành Phần</label>
                        <Input
                            name="txtElement"
                            type="text"
                            className="form-control"
                            value={txtElement}
                            onChange={this.onChange}
                            validations={[required]}
                        />
                    </div>

                    <div>
                        <button className="btn btn-primary btn-block login btn-action-page " type="submit">Lưu lại</button>
                        <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                        <Link
                            to="/service" className="btn btn-success  btn-action-page ml-2" >
                            Trở lại
                    </Link>
                    </div>
                </Form>
            </div>
        )
    }
}

const mapStateToProp = state => {
    return {
        list: state.service,
        itemEditting: state.serviceEditting

    }
};

const mapDispatchToProps = dispatch => {

    return {
        onAddService: service => {
            dispatch(actions.actAddServicecsRequest(service));
        },
        onEditService: id => {
            dispatch(actions.actEditServicesRequest(id));
        },
        onUpdateService: service => {
            dispatch(actions.actUpdateServiceRequest(service));
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(ServiceActionsPage);
