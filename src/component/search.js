import React from 'react';
import Videos from './videos.js';
import {connect} from 'react-redux';
import {stateMapper} from '../store/store.js';



class SearchComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query: ""
        };
         this.inputChanged = this.inputChanged.bind(this);
         this.buttonClicked= this.buttonClicked.bind(this);
    }

    componentDidMount() {
        this.props.dispatch({
            type: "CLEAR_VIDEOS"
        });
    }
    inputChanged(event) {
        this.setState({
            query: event.target.value
        });
    }

    buttonClicked() {
        console.log(this.state.query);

    }
    render(){
        return(
            <div>
                <h2>Search Videos</h2>
                <hr />
                <div className = "form-row">
                    <div className ="col">
                        <input onChange = {this.inputChanged} type = "text" className = "form-control form-control-lg" />
                    </div>
                        <button onClick = {this.buttonClicked} className = "btn btn-success btn-lg">Search</button>
                    </div>
                <Videos />
            </div>
        );
    }
}
let Search = connect(stateMapper)(SearchComponent);
export default Search; 