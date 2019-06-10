import {createStore, combineReducers} from 'redux';
import videosReducer from './reducers/videoReducer.js';


let reducer = combineReducers({
 videos: videosReducer
});

let store = createStore(reducer);

export {store};