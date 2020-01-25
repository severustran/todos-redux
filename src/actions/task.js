import * as taskApis from './../apis/task';
import * as actionTypes from './../constants/actionTypes';

export const fetchListTask = () => {
    return {
        type: actionTypes.LOAD_DATA
    };
};

export const fetchListTaskSuccess = (data) => {
    return {
        type: actionTypes.LOAD_DATA_SUCCESS,
        payload: {
            data
        }
    };
};

export const fetchListTaskFailed = (error) => {
    return {
        type: actionTypes.LOAD_DATA_FAILED,
        payload: {
            error
        }
    };
};

export const fetchListTaskRequest = () => {
    return dispatch => {
        //reset state = {}
        dispatch(fetchListTask());
        taskApis
            .getList()
            .then(res => {
                dispatch(fetchListTaskSuccess(res.data));
                // console.log('data: ', res.data);
            })
            .catch(error => {
                dispatch(fetchListTaskFailed(error));
                console.log('error:', error);
            });
    };
};