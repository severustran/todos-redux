import axios from 'axios';
import { URL } from '../constants';

export const LOAD_DATA = 'LOAD_DATA';

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

