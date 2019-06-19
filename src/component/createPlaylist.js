import React from 'react';
import {connect} from 'react-redux';
import {stateMapper} from '../store/store.js';
import {Redirect} from 'react-router-dom';
class CreaterPlaylistComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            type:"",
            description: "",

            formState: {
                isFormValid: true,
                isNameValid: true,
                isDescriptionValid: true
            }
        };

        this.onChange = this.onChange.bind(this);
    }

onChange(event) {
        let name = event.target.name ;
        this.setState({
            [name]: event.target.value
        });
    }

validateForm(){

   let newFormState = {
            isFormValid: true,
            isNameValid: true,
            isDescriptionValid: true
   };

   if(!this.state.name) {
       newFormState.isNameValid = false;
       newFormState.isFormValid = false;
   }
   if(!this.state.description) {
    newFormState.isDescriptionValid = false;
    newFormState.isFormValid = false;
}
    this.setState({
        formState: newFormState
    });

    return newFormState.isFormValid;
    
}

handleSubmit(event){
    event.preventDefault();

    if(!this.validateForm()) {
        return;
    }
    this.props.dispatch({
        type: "CREATE_PLAYLIST",
        formData: this.state 
    });
}

componentWillUnmount() {
    this.props.dispatch({
        type: "CLEAR_PLAYLIST_CREATED"
    });
}


    render(){
        if(this.props.newPlaylist.id) {
            return <Redirect to = {`/app/playlist/${this.props.newPlaylist.id}`} />
        }

        return(
            <div>
                <h2 className = "text-success">Create a New Playlist</h2>
                <hr />   
                {
                    !this.state.formState.isFormValid && <div className = "alert alert-danger" >Please fill all the fields and try again !!</div>
                }
                
                <form onSubmit = {this.handleSubmit.bind(this)}>
                     <div className = "form-group">
                        <label htmlFor = "">
                            Playlist Name:
                            <input 
                            name= "name" 
                            onChange = {this.onChange} 
                            className = {`form-control ${
                                !this.state.formState.isNameValid && "is-invalid"                                
                                }`} type = "text" />
                        </label>
                            <div className = "form-group">
                                <label htmlFor = "">
                                    Select Playlist Type:
                                    <select name = "type" onChange = {this.onChange} className = "form-control">
                                        <option value = "public">Public</option>
                                        <option value = "private">Private</option>
                                        <option value = "unlisted">Unlisted</option>
                                    </select>
                                </label>
                            </div> 
                            <div >
                                <label htmlFor = "" >
                                    Description: 
                                    <textarea  
                                    name = "description" 
                                    onChange = {this.onChange} 
                                    cols = "30" 
                                    rows = "5" 
                                    className = {`form-control ${
                                        !this.state.formState.isDescriptionValid && "is-invalid"                                
                                        }`} >

                                    </textarea>
                                </label>
                            </div>
                             <button onClick = {this.handleSubmit.bind(this)} type = "submit" className = "btn btn-success">Create Playlist</button>  
                     </div> 
                </form>   
            </div>
        );
    }
}
let CreatePlaylist = connect(stateMapper)(CreaterPlaylistComponent);

export default CreatePlaylist; 