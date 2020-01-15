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
            console.log(action.payload);
            return {
                ...state,
                todoLists: [...state.todoLists, action.payload]
            }
        // {
        //     ...state,
            
        //     // {
        //         // id: action.payload.id,
        //         // todo: action.payload.title,
        //         // isCompleted: action.payload.isCompleted
        // }
        default:
            return state;
    }
}