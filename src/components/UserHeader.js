import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const user = this.props.user;
        if (!user) {
            return null;
        }
        return <div className='header'>{user.name}</div>;
    }
}

// can extract anything that will do some computation on our redux states and passing them along to props
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user => user.id === ownProps.userId)
    };
};

export default connect(mapStateToProps, {fetchUser})(UserHeader);