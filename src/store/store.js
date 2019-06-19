import {createStore, combineReducers} from 'redux';
import videosReducer from './reducers/videoReducer.js';
import isVideoLoadingReducer from './reducers/isVideoLoadingReducer.js';
import currentPlayerVideoReducer from './reducers/currentPlayerVideoReducer.js';
import currentVideoCommentsReducer from './reducers/currentVideoCommentsReducer.js';
import playlistsReducer from './reducers/playlistsReducer.js';
import newPlaylistReducer from './reducers/newPlaylistReducer.js';
 

let reducer = combineReducers({
 videos: videosReducer,
 isVideoLoading: isVideoLoadingReducer,
 currentPlayerVideo: currentPlayerVideoReducer,
 currentVideoComments: currentVideoCommentsReducer,
 playlists: playlistsReducer,
 newPlaylist: newPlaylistReducer
});

let store = createStore(reducer);
store.subscribe(()=> {
    console.log("dispatched===>",store.getState());
})
function stateMapper(state) {
    return state;
}

export {store, stateMapper};