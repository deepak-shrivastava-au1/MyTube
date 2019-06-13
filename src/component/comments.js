import React from 'react';
import {connect} from 'react-redux';
import { stateMapper} from  '../store/store.js';
class CommentsComponent extends React.Component {

    componentDidMount(){
        this.props.dispatch({
            type: "FETCH_VIDEO_COMMENTS",
            videoId: this.props.videoId 
        });
    }

    render() {
        return (
            "Loading Comments..."
        );
    }
}
let Comments = connect(stateMapper)(CommentsComponent);

export default Comments;