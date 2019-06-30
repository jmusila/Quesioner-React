import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';


export default combineReducers({
    meetups: homeReducer,
    login: loginReducer,
    register: registerReducer,

});
