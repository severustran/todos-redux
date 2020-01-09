import { GLOBAL_STATE } from '../initState';
import { LOAD_DATA } from '../actions/loadDataAction';

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