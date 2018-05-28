import {combineReducers} from 'redux';
import buttonClickReducer from './buttonClickReducer';

export default combineReducers({
    buttonClick : buttonClickReducer
});
