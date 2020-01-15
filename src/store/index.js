import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { loadData } from '../reducers/todosReducer';
import { GLOBAL_STATE } from './initState'

//const allReducers = combineReducers(loadTodosReducer, loadTodosAPIReducer);

const middleware = [thunk];
// const store = createStore(rootReducer, GLOBAL_STATE,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const store = createStore(loadData, GLOBAL_STATE, compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;