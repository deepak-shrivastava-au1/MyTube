import {createStore, combineReducers} from 'redux';
import videosReducer from './reducers/videoReducer.js';
import isVideoLoadingReducer from './reducers/isVideoLoadingReducer.js';
import currentPlayerVideoReducer from './reducers/currentPlayerVideoReducer.js';


let reducer = combineReducers({
 videos: videosReducer,
 isVideoLoading: isVideoLoadingReducer,
 currentPlayerVideo: currentPlayerVideoReducer
});

let store = createStore(reducer);
store.subscribe(()=> {
    console.log(store.getState());
})

function stateMapper(state) {
    return state;
}

export {store, stateMapper};