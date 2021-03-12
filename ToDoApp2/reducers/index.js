import addReducer from './add'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    add: addReducer
});

export default rootReducer;