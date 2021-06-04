import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Footer, Header, LogIn } from './components/common';
import  Home  from './components/home';
import Profile from './components/profile/Profile';
import Stats from './components/stats/Stats';
import Filters from './components/filters/Filters';
import './App.css';


function App () {

    const [connected, setConnected ] = useState(false);
    const getIn = (state) => {
        setConnected(state);
    }



    return (
     <Router>
        <div className="App">
            <Header connected={connected} getIn={getIn} />
            <div className="content">
                <Switch>
                <Route path="/" component={  Home } exact={ true }  />
                {connected ?  <Route path="/profile" component={ Profile } /> : <LogIn getIn={getIn}/> }
                {connected ?  <Route path="/stats"  component={ Stats }/> : <LogIn getIn={getIn}/> }
                {connected ?  <Route path="/filters" component={ Filters }/> : <LogIn getIn={getIn}/> }
                    <Route path="/logIn" component={ LogIn }/>
                
                </Switch>
            </div>
            <Footer />
        </div>
     </Router> 
    );

};

export default App;
