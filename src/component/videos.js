import React from 'react';
import {store, stateMapper} from '../store/store.js';
import {connect} from 'react-redux';

class VideosComponent extends  React.Component {
    

    renderVideos() {
        return this.props.videos.map(v => {

            let videoId = v.id;
            if(typeof videoId != "string") {
                videoId = v.id.videoId;
            }
                return (
                    <div key={v.etag}  className="col-md-4">
                    <a target = "blank" href = {`http://youtube.com/watch?v=${videoId}`}>
                    <img className= "img-fluid" src={v.snippet.thumbnails.high.url} alt={v.snippet.title} />
                    </a>
                    <small>{v.snippet.title} by <em>{v.snippet.channelTitle}</em></small>
                    <hr />
                    </div>
                );
            })
    }
 
    render() {
        if(this.props.isVideoLoading) {
            return (
                <div className="d-flex justify-content-center">
                     <div className="spinner-border text-danger" role="status">
                         <span className="sr-only">Loading...</span> 
                     </div>
                </div>
            );
        }
        else {
            return (
                <div className = "row">
                    {this.renderVideos()}
                </div>
            )
        } 
    }
}
let Videos = connect(stateMapper)(VideosComponent);

export default Videos;