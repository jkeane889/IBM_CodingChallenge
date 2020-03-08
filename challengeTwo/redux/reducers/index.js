import { combineReducers } from 'redux';
import navigateReducer from './navigateReducer';

const rootReducer = combineReducers({
    nav: navigateReducer,
});

export default rootReducer;