import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducers from './techReducers';

export default combineReducers({
    log: logReducer,
    tech: techReducers
});