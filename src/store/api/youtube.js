function fetchVideos(store, videoType) {
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCE3p0ZFKCEhXILqEVApADLuyairZDKq-4&chart=mostPopular")
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
export {fetchVideos};