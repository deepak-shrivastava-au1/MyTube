import {fetchCurrentVideo} from '../api/youtube.js';
import {store} from '../store.js';
 

function currentPlayerVideoReducer(currentPlayerVideo = {}, action) {

    if(action.type === "CLEAR_VIDEO_DATA") {
        return {};
    }

    if(action.type === "FETCH_VIDEOS_DATA") {
        fetchCurrentVideo(store, action);
    }
    if(action.type === "VIDEOS_DATA_LOADED") {
        let newAction = action.videoData;
        newAction.snippet.shortDescription = action.videoData.snippet.description.slice(0, 400);
        return newAction;
    }
     return currentPlayerVideo;
}

export default currentPlayerVideoReducer;