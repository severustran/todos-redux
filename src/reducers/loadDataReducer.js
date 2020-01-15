import { GLOBAL_STATE } from '../store/initState';
import { LOAD_DATA } from '../constants/actionTypes';

const loadData = (state = GLOBAL_STATE, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state,
                todoLists: action.payload
            }
        default:
            return state;
    }
}

export default loadData;