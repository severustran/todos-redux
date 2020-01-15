import axios from 'axios';
import { URL } from '../constants/constants';
import { LOAD_DATA } from '../constants/actionTypes';

export const fetchData = () => (dispatch) => {
    // axios.get(URL).then(res => dispatch(load(res.data)))
    axios.get(URL).then(res => {
        dispatch(load(res.data));
        console.log(res.data);
    })
}

export const load = (todos) => {
    return {
        type: LOAD_DATA,
        payload: todos
    }
}

