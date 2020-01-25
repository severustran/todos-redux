import { GLOBAL_STATE } from '../store/initState';
import * as actionTypes from '../constants/actionTypes';


const loadTodoReducer = (state = GLOBAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_DATA:
            return {
                ...state,
                todoLists: []
            }
        case actionTypes.LOAD_DATA_SUCCESS:
            return {
                ...state,
                todoLists: action.payload.data
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

export default loadTodoReducer;