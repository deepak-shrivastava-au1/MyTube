import {fetchPlaylists} from  '../api/youtube.js';
import {store} from '../store.js';

function playlistsReducer(playlists = [], action) {

    if(action.type === "FETCH_PLAYLISTS") {
        fetchPlaylists(store, action);
    }
    if(action.type === "PLAYLIST_CREATED") {
        fetchPlaylists(store, action);
    }

    if(action.type === "PLAYLISTS_LOADED") {
        return action.playlists;
    }

    return playlists;
}

export default playlistsReducer;