import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import componentState from './componentState';

const rootReducer = combineReducers({
    router: routerReducer,
    counter,
    componentState
});
export  default rootReducer;