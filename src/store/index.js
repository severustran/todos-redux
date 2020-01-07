import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {LOAD} from './reducers'
import thunk from 'redux-thunk';

//const allReducers = combineReducers(loadTodosReducer, loadTodosAPIReducer);
const initState = [
        { 
            id: "1",
            title: "Go jogging",
            isCompleted: true
        },
        { 
            id: "2",
            title: "Reading book",
            isCompleted: false
        },
        { 
            id: "3",
            title: "Have breakfast",
            isCompleted: true
        }
    ];

// const middleware = [thunk];
// const store = createStore(loadTodosReducer, initState,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const store = createStore(LOAD,initState);

export default store;