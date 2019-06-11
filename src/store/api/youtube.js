function fetchVideos(store, action) {
    if(action.videoType === "trending"){
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCE3p0ZFKCEhXILqEVApADLuyairZDKq-4&chart=mostPopular&maxResults=30")
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
    let url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCE3p0ZFKCEhXILqEVApADLuyairZDKq-4&q=${action.query}&part=snippet&maxResults=30`
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