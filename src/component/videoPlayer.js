import React from 'react';
import {connect} from 'react-redux';
import { stateMapper} from  '../store/store.js';
import Comments from './comments.js';


class VideoPlayerComponent extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            shwoMoreClicked: false
        };
    }

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

    shwoMoreClicked(){
        this.setState({
            shwoMoreClicked: true
        })
    }

    renderDescription() {
        if(this.state.shwoMoreClicked){
            return(
                <p>
                    {this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.snippet.description}
                </p>

            );
        }
        return <p>
            {this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.snippet.shortDescription}
            <button onClick = {this.shwoMoreClicked.bind(this)} className = "btn btn-link">...Show More</button>
        </p>

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
                        <span className="oi oi-eye text-dark"></span>{this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.viewCount}&emsp; &emsp;
                        
                        <span className="oi oi-thumb-up text-success"></span> {this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.likeCount}&emsp; &emsp;
                        
                        <span className="oi oi-thumb-down text-dark"></span>{this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.dislikeCount}
                        </h2>
                        <hr />
                    </div>
                 </div>
                 <div className = "row">
                     <div className = "col-md-8">
                         {this.renderDescription()}
                     </div>
                 </div>
                 <div className = "row">
                     <div className = "col-md-8">
                         <Comments videoId = {this.props.match.params.videoId} />
                     </div>
                 </div>
            </div>
        );
    }

}
let VideoPlayer = connect(stateMapper)(VideoPlayerComponent);

export default VideoPlayer;