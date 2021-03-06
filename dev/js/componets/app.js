import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import AddUser from '../containers/add-user';
import Diagnostic from '../containers/diagnostic';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr/>
        <h2>User Details</h2>
        <UserDetail />
        <hr/>
        <h2>Add User</h2>
        <AddUser />
        <Diagnostic />
    </div>
);

export default App;
