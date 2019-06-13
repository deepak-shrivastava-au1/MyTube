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

    renderDescription() {
        if(!this.props.currentPlayerVideo.snippet) {
            return null;
        }
        else {
            let description = this.props.currentPlayerVideo.snippet.description;
            if(description.length> 500) {
                return `${description.slice(0, 500)}...Read More`;
            }else {
                return description;
            }
            
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
                        <span className="oi text-success" data-glyph="eye"></span> {this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.viewCount}
                        </h2>
                        <h2>
                        <span className="oi oi-thumb-up text-success"></span> {this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.likeCount}
                        </h2>
                        <h2>
                        <span className="oi oi-thumb-down text-success"></span>{this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.dislikeCount}
                        </h2>
                        <hr />
                    </div>
                 </div>
                 <div className = "row">
                     <div className = "col-md-8">
                         {this.renderDescription()}
                     </div>
                 </div>
            </div>
        );
    }

}
let VideoPlayer = connect(stateMapper)(VideoPlayerComponent);

export default VideoPlayer;