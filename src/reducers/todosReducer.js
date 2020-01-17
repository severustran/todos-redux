import { GLOBAL_STATE } from '../store/initState';
import { LOAD_DATA, ADD_TODO } from '../constants/actionTypes';

export const loadData = (state = GLOBAL_STATE, action) => {
    console.log("action", action)
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state,
                todoLists: action.payload
            }
        case ADD_TODO:
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