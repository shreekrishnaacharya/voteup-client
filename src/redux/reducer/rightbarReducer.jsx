import { ActionTypes } from "../contants/action-types"
const initList = {
    recent: [],
    result: []
}

export const rightbarReducer = (state = initList, { type, payload }) => {
    switch (type) {
        case ActionTypes.RIGHT_RECENT:
            return { ...state, recent: [...payload] };
        case ActionTypes.RIGHT_RESULT:
            return { ...state, result: [...payload] };
        default:
            return state;
    }
}