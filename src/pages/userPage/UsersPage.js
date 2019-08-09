import React, { Component } from 'react';
import './../../public/css/user.css';
import { connect } from 'react-redux';
import Users from './../../components/user/Users';
import * as actions from '../../redux/actions/actionUsers';
import UserItem from './../../components/user/UserItem';

class UsersPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            currentPage: 1,
            postsPerPage: 5,
        }
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    onChange = filter => {
        this.props.onFilter(filter);
    }

    onDelete = id => {
        this.props.onDeleteUser(id);
    }

    render() {
        const { users } = this.props;

        const { currentPage, postsPerPage } = this.state;
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
        const paginate = pageNumber => this.setState({ currentPage: pageNumber });

        return (
            <div className="users-page-component">
                <Users
                    postsPerPage={postsPerPage}
                    totalPosts={users.length}
                    paginate={paginate}
                    onChange={this.onChange}
                >{this.showUserItem(currentPosts)}</Users>
            </div>
        )
    }

    showUserItem = (currentPosts) => {
        var result = null;
        var { filter, users } = this.props;
        currentPosts = users;
        // console.log(filter.status);

        if (filter.name) {
            currentPosts = currentPosts.filter((user) => {
                return user.name.toLowerCase().indexOf(filter.name) !== -1;
            });
        }
        if (filter.email) {
            currentPosts = currentPosts.filter((user) => {
                return user.email.toLowerCase().indexOf(filter.email) !== -1;
            });
        }
        if (filter.phone) {
            currentPosts = currentPosts.filter((user) => {
                return user.phone.indexOf(filter.phone) !== -1;
            });
        }
        if (filter.cmnd) {
            currentPosts = currentPosts.filter((user) => {
                return user.cmnd.indexOf(filter.cmnd) !== -1;
            });
        }
        if (filter.address) {
            currentPosts = currentPosts.filter((user) => {
                return user.address.toLowerCase().indexOf(filter.address) !== -1;
            });
        }
        if (filter.role) {
            currentPosts = currentPosts.filter((user) => {
                if (filter.role === '0') {
                    return user;
                } else {
                    return user.role.indexOf(filter.role) !== -1;
                }
            });
        }
        if (filter.status) {
            currentPosts = currentPosts.filter((user) => {
                if (filter.status === "-1") {
                    return user;
                } else {
                    return user.status === (filter.status === "0" ? true : false);
                }
            });
        }


        if (currentPosts.length > 0) {
            result = currentPosts.map((user, index) => {
                return <UserItem
                    key={index}
                    user={user}
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
        users: state.users,
        filter: state.userFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUsers: () => {
            dispatch(actions.actFetchUsersRequest());
        },
        onDeleteUser: id => {
            dispatch(actions.actDeleteUserRequest(id));
        },
        onFilter: (filter) => {
            dispatch(actions.filterUser(filter));
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(UsersPage);
