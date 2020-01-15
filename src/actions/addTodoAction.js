import axios from 'axios';
import { URL } from '../constants/constants';
import { ADD_TODO } from '../constants/actionTypes';
import nextId from 'react-id-generator';

export const addTodoAPI = ({title}) => dispatch => {
    axios.post(URL, {title})
        .then(res => {
            dispatch(addTodo(res.data))
        });
}

export const addTodo = todos => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextId(),
            title: todos.title,
            isCompleted: false,
        }
    }
}