import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



import Login from './Login';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
       <div className="app">
        <Switch>
          <Route path="/login">
          <Header/>
            <Login/>
          </Route>
         
          <Route path="/checkout">
          <Header/>
            <Checkout/>
          </Route>

          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>

    </Router>
   

    
  );
}

export default App;
