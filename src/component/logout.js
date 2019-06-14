import React from 'react';
import {Redirect} from 'react-router-dom';

class Logout extends React.Component {
   
    render(){
        localStorage.removeItem("user");

        return(
            <div>
                <p> Loging You Out ! Please Wait...</p>
                <Redirect to = "/login" />
            </div>
      
        );
    }
}
export default Logout; 