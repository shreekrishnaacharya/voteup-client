import { ActionTypes } from "../contants/action-types"

const setFeedList = (feedList) => {
    return {
        type: ActionTypes.FEED_LIST,
        payload: { feeds: feedList }
    }
};

export { setFeedList }
