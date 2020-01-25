import { createStore, compose, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from './../reducers';
// import loadData from '../reducers/todosReducer';
// import rootSaga from './../sagas';
import { GLOBAL_STATE } from './initState'

// const sagaMiddleware = createSagaMiddleware()
const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = [thunk];
// const store = createStore(rootReducer, GLOBAL_STATE,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const store = createStore(rootReducer, GLOBAL_STATE, compose(applyMiddleware(...middleware),devTool));

//sagaMiddleware.run(rootSaga);
export default store;