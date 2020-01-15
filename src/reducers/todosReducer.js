import { GLOBAL_STATE } from '../store/initState';
import { LOAD_DATA, ADD_TODO } from '../constants/actionTypes';

export const loadData = (state = GLOBAL_STATE, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state,
                todoLists: action.payload
            }
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