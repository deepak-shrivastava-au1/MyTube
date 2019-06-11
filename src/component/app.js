import React from 'react';
import Videos from './videos.js';
import {store, stateMapper} from '../store/store.js';
import {Provider} from 'react-redux';
import Menu from './menu.js';
 


class App extends React.Component {
    render(){
        return(
            <Provider store = {store}>
                <div className = "container">
                    <div className = "row">
                        <div className = "col-md-3">
                            <Menu />
                        </div>

                        <div className = "col-md-9">
                            <h2>MyTube - Trending Videos</h2>
                            <hr />
                            <Videos /> 
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}
export default App; 