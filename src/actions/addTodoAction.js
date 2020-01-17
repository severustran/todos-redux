import axios from 'axios';
import { URL } from '../constants/constants';
import { ADD_TODO } from '../constants/actionTypes';



export const addTodo = todos => {
    return {
        type: ADD_TODO,
        payload: {
            id: todos.id,
            title: todos.title,
            isCompleted: false
        }
    }
}
export const addTodoAPI = ({title}) => dispatch => {
    axios.post(URL, {title, isCompleted: false})
        .then(res => {
            dispatch(addTodo(res.data));
        });
}