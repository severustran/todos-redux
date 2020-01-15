import { combineReducers } from 'redux';
import loadDataReducer from './loadDataReducer';
import addTodoReducer from './addTodoReducer';

const rootReducer = combineReducers({
    loadDataReducer,
    addTodoReducer,
});

export default rootReducer;