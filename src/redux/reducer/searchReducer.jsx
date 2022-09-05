import { ActionTypes } from "../contants/action-types"
const initList = {
    text: "",
    cat: "",
    update: ""
}


export const searchReducer = (state = initList, { type, payload }) => {
    switch (type) {
        case ActionTypes.SEARCH_DETAIL:
            return { ...payload };
        default:
            return state;
    }
}