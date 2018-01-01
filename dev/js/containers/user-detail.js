import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {deleteUser as deleteUseryyy} from '../actions/index';

class UserDetail extends Component {

    render(){

        if (!this.props.user){
            return(<h4>Please select a user...</h4>)
        }

        return (
            <div>
                <img src={this.props.user.thumbnail}/>
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Description: {this.props.user.description}</h3>
                <button onClick={() => this.props.deleteUserxxx(this.props.user)}>
                    Remove User
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user : state.activeUser
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({deleteUserxxx: deleteUseryyy}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserDetail);
