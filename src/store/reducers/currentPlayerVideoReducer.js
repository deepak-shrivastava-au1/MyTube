import {fetchCurrentVideo} from '../api/youtube.js';
import {store} from '../store.js';
 

function currentPlayerVideoReducer(currentPlayerVideo = [], action) {

    if(action.type === "CLEAR_VIDEO_DATA") {
        return {};
    }

    if(action.type === "FETCH_VIDEO_DATA") {
        fetchCurrentVideo(store, action);
    }
    if(action.type === "VIDEOS_DATA_LOADED") {
        currentPlayerVideo = action.videoData;
    }
     return currentPlayerVideo;
}

export default currentPlayerVideoReducer;