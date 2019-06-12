import {fetchCurrentVideo} from '../api/youtube.js';
import {store} from '../store.js';
 

function currentPlayerVideoReducer(currentPlayerVideo = {}, action) {

    if(action.type === "FETCH_VIDEO_DATA") {
        fetchCurrentVideo(store, action);
    }
    if(action.type === "VIDEO_DATA_LOADED") {
        return action.videoData
    }
     return currentPlayerVideo;
}

export default currentPlayerVideoReducer;