import React from 'react';
import {connect} from 'react-redux';
import { stateMapper} from  '../store/store.js';


class VideoPlayerComponent extends React.Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_VIDEOS_DATA',
            videoId: this.props.match.params.videoId
        });
    }

    componentWillUnmount() {
        this.props.dispatch({
            type: "CLEAR_VIDEO_DATA"
        });
    }

    renderTitle(){
        if(!this.props.currentPlayerVideo.snippet) {
            return 'Loading...'
        }
        else{
            return this.props.currentPlayerVideo.snippet.title;
        }
    }

    render() {
        return(
            <div>
                <h2 className = "text-success">{this.renderTitle()}</h2>
                <hr />
                    <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.props.match.params.videoId}?rel=0`} allowFullScreen></iframe>
                 </div> 
                 <div className = "row">
                    <div className = "col-md-12">
                        <h2>
                        <span class="oi" data-glyph="eye"></span> {this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.viewCount}
                        </h2>
                        <h2>
                        <span class="oi oi-thumb-up"></span> {this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.likeCount}
                        </h2>
                        <h2>
                        <span class="oi oi-thumb-down"></span>{this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.dislikeCount}
                        </h2>
                    </div>
                 </div>
                 <div className = "row">
                     <div className = "col-md-8">
                         {this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.snippet.description}
                     </div>
                 </div>
            </div>
        );
    }

}
let VideoPlayer = connect(stateMapper)(VideoPlayerComponent);

export default VideoPlayer;