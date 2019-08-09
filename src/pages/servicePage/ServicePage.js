import React, { Component } from 'react';
import Services from './../../components/service/Services';
import ServiceItem from './../../components/service/ServiceItem';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actionServices';

class ServicePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            currentPage: 1,
            postsPerPage: 5,
        }
    }

    componentDidMount() {
        this.props.fetchAllServices();
    }

    onDelete = (id) => {
        this.props.onDeleteService(id);
    }
    onChange(filter) {
        this.props.onFilter(filter);
    }

    render() {
        const { services } = this.props;
        // Change page
        const { currentPage, postsPerPage } = this.state;
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = services.slice(indexOfFirstPost, indexOfLastPost);
        const paginate = pageNumber => this.setState({ currentPage: pageNumber });

        return (
            <div>
                <Services
                    postsPerPage={postsPerPage}
                    totalPosts={services.length}
                    paginate={paginate}
                    onChange={this.onChange}
                >{this.showProductItem(currentPosts)}</Services>
            </div>
        )
    }

    showProductItem = (currentPosts) => {
        var result = null;
        var { filter, services } = this.props;
        currentPosts = services;
        // filter service in table
        if (filter.name) {
            currentPosts = currentPosts.filter((service) => {
                return service.name.toLowerCase().indexOf(filter.name) !== -1;
            });
        }
        if (filter.price > 0) {
            currentPosts = currentPosts.filter((service) => {
                return service.price.toLowerCase().indexOf(filter.price) !== -1;
            });
        }
        if (filter.facility) {
            currentPosts = currentPosts.filter((service) => {
                return service.facility.toLowerCase().indexOf(filter.facility) !== -1;
            });
        }
        if (filter.element) {
            currentPosts = currentPosts.filter((service) => {
                return service.element.toLowerCase().indexOf(filter.element) !== -1;
            });
        }
        // render service in table
        if (currentPosts.length > 0) {
            result = currentPosts.map((item, index) => {
                return <ServiceItem
                    key={index}
                    item={item}
                    index={index}
                    onDelete={this.onDelete}
                />
            })
        }
        return result;
    }
}

const mapStateToProp = state => {
    return {
        services: state.service,
        filter: state.serviceFilter
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllServices: () => {
            dispatch(actions.actFetchServicesRequest());
        },
        onDeleteService: id => {
            dispatch(actions.actDeleteServiceRequest(id));
        },
        onFilter: (filter) => {
            dispatch(actions.filterService(filter))
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(ServicePage);
