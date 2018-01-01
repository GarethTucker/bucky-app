import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import DiagnosticReducer from './reducer-diagnostic';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    diagnostic: DiagnosticReducer
});

export default allReducers;
