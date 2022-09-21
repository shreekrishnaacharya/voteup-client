import { ActionTypes } from "../contants/action-types"

const setFeedList = (feedList) => {
    return {
        type: ActionTypes.FEED_LIST,
        payload: feedList
    }
};

const setFeedReset = (feedList) => {
    return {
        type: ActionTypes.FEED_LIST_RESET,
        payload: feedList
    }
};

export { setFeedList, setFeedReset }
