import { ActionTypes } from "../contants/action-types"

const setSearch = (search) => {
    return {
        type: ActionTypes.SEARCH_DETAIL,
        payload: search
    }
};
export { setSearch }
