import { LOAD_TODOS } from '../actions/constants';

export const LOAD = (state = {}, action) => {
    switch (action.type) {
        case LOAD_TODOS:
            return state;
        default:
            return state;
    }
}