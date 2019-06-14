import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleLogin} from 'react-google-login';


class Login extends React.Component {
    constructor(props){
        super(props);

        this.googleCallBack = this.googleCallBack.bind(this);
    }

    googleCallBack(response){
        if(!response || !response.accessToken) {
            alert("Sorry, Google Sign in Failed ! Please try again !");
            return;
        }
        let user = {
            token: response.accessToken,
            name: response.profileObj.name
        };

        localStorage.setItem("user", JSON.stringify(user));

        this.props.history.push("/app");
    }

    render() {
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-4 offset-md-4">
                        <h2 className = "text-success">Login Using Google</h2>
                        <hr className = "text-dark" />
                        <GoogleLogin
                        clientId = "1094586187773-bibdghs9ph5pqg1lmrll107jo5taejfi.apps.googleusercontent.com"
                        onSuccess = {this.googleCallBack}
                        onFailure = {this.googleCallBack}
                        buttonText = "Sign In"
                        />

                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
