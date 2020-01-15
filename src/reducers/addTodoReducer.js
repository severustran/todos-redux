import { GLOBAL_STATE } from '../store/initState';
import { ADD_TODO } from '../constants/actionTypes';

const addTodo = (state = GLOBAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    todo: action.title,
                    isCompleted: false
                }
            ]
        default:
            return state;
    }
}

export default addTodo;