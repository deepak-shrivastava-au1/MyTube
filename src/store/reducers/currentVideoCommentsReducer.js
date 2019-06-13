
import {fetchVideoComments} from  '../api/youtube.js';
import {store} from '../store.js';

function currentVideoCommentsReducer(currentVideoComments = [], action) {

    if(action.type === "FETCH_VIDEO_COMMENTS") {
       fetchVideoComments(store, action);
    }
    if(action.type === "VIDEO_COMMENTS_LOADED") {
        return action.comments;
    }

    return currentVideoComments;
}

export default currentVideoCommentsReducer;