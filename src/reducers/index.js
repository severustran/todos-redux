import { combineReducers } from 'redux';
import loadTodoReducer from './todosReducer';

const rootReducer = combineReducers({
    todoLists: loadTodoReducer,
});

export default rootReducer;