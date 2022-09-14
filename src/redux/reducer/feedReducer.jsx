import { ActionTypes } from "../contants/action-types"
const initList = {
    feeds: []
}


export const feedListReducer = (state = initList, { type, payload }) => {
    switch (type) {
        case ActionTypes.FEED_LIST:
            return { ...state, ...payload };
        default:
            return state;
    }
}
