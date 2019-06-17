import React from 'react';

class CreatePlaylist extends React.Component {
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
        
    render(){
        return(
            <div>
                <h2 className = "text-success">Create a New Playlist</h2>
                <hr />   
                {
                    !this.state.formState.isFormValid && <div className = "alert alert-danger" >Please fill all the fields and try again !!</div>
                }
                
                <form>
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
                             <button type = "submit" className = "btn btn-success">Create Playlist</button>  
                     </div> 
                </form>   
            </div>
        );
    }
}
export default CreatePlaylist; 