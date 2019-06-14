import React from 'react';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: ""
        };
    }
    componentDidMount(){
        let user = localStorage.getItem("user");
        user = JSON.parse(user);
        this.setState({
            name: user.name
        })
    }
    render(){
        return(
            <div>
                <h2 className = "text-success">Your Profile</h2>
                <hr />
                <div className = "container">
                    <div className = "row">
                        <div className = "col-md-4 offset-md-8">
                            <p>Welcome <strong>{this.state.name}</strong></p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default Profile; 