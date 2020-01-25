import { fork , take, call} from 'redux-saga/effects';
import * as actionTypes from './../constants/actionTypes';
import { fetchData } from './../actions/loadDataAction';

function* watchLoadData() {
    yield take(actionTypes.LOAD_DATA);
    console.log('Watching load data');
    const resp = yield call(fetchData);
    console.log(resp);
}

function* rootSaga() {
    yield fork(watchLoadData); //none-blocking - no waiting
}

export default rootSaga;