import { combineReducers } from 'redux';
import { loadData } from './todosReducer';

const rootReducer = combineReducers({
    loadData,
});

export default rootReducer;