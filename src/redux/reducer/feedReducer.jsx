import { ActionTypes } from "../contants/action-types"
const initList = [];

export const feedListReducer = (state = initList, { type, payload }) => {
    switch (type) {
        case ActionTypes.FEED_LIST:
            return [...state, ...payload];
        case ActionTypes.FEED_LIST_RESET:
            return [...payload];
        default:
            return state;
    }
}
