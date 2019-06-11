
import MYTUBE_CONFIG from '../../config.js'

function fetchVideos(store, action) {
    if(action.videoType === "trending"){
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}&chart=mostPopular&maxResults=30`
    fetch(url)
    .then(function(data) {
        return data.json();
    })
    .then(function(response) {
        store.dispatch({
            type: "VIDEOS_LOADED",
            videos: response.items
        })
    })
    .catch(function(err) {
        console.log(err);
    });
}
 else if(action.videoType === "search") {
    let url = `https://www.googleapis.com/youtube/v3/search?key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}&q=${action.query}&part=snippet&maxResults=30`
    fetch(url)
    .then(function(data) {
        return data.json();
    })
    .then(function(response) {
        store.dispatch({
            type: "VIDEOS_LOADED",
            videos: response.items
        })
    })
    .catch(function(err) {
        console.log(err);
    });
    }
}
export {fetchVideos};