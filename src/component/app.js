import React from 'react';
import Videos from './videos.js';
import {store, stateMapper} from '../store/store.js';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from './menu.js';
import Trending from './trending.js';
import Search from './search.js';
 


class App extends React.Component {
    render(){
        return(
            <Provider store = {store}>
                <Router>
                        <div className = "container">
                            <div className = "row">
                                <div className = "col-md-3">
                                    <Menu />
                                </div>

                                <div className = "col-md-9">
                                    <Route  path = "/" exact ={true} Component = {Trending} />
                                    <Route  path = "/search" Component = {Search} />
                                </div>
                            </div>
                        </div>
                </Router>
            </Provider>
        )
    }
}
export default App; 