import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addUser} from '../actions/index';


let AddUser = ({ dispatch }) => {
    let first
    let last
    let user
    let age
    let thumbnail
    let description

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    let user = new Object();
                    if(!first){
                        return
                    }
                    user.first = first.value;
                    user.last = last.value;
                    user.age = age.value;
                    user.thumbnail = thumbnail.value;
                    user.description = description.value;
                    dispatch(addUser(user));
                    user = null;
                }}
            >
                <input placeholder="First name"
                    ref={node => {
                        first = node;
                    }}
                /><br/>
                <input placeholder="Last name"
                    ref={node => {
                        last = node;
                    }}
                /><br/>
                <input placeholder="Age"
                    ref={node => {
                        age = node;
                    }}
                /><br/>
                <input placeholder="Thumbnail link"
                    ref={node => {
                        thumbnail = node;
                    }}
                /><br/>
                <input placeholder="Description"
                    ref={node => {
                        description = node;
                    }}
                /><br/>
                <button type="submit">
                    Add user
                </button>
            </form>
        </div>
    )
}

export default connect()(AddUser);