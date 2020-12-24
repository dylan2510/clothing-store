// base reducer then represents all reducers in the application

import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';

export default combineReducers({
    // the key user is pointing to userReducer
    // combineReducers.user = userReducer
    user: userReducer
});

