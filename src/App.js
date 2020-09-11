import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



import Login from './Login';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Register from './Register';
import HeaderTwo from './HeaderTwo';
import Admin from './Admin';
import Admindashboard from './Admindashboard';

function App() {
  return (
    <Router>
       <div className="app">
        <Switch>
        <Route path="/admindashboard">
            <Header/>
            <HeaderTwo/>
            <Admindashboard/>
        </Route>
        <Route path="/admin">
            <Header/>
            <HeaderTwo/>
            <Admin/>
        </Route>

        <Route path="/signup">
            <Header/>
            <HeaderTwo/>
            <Register/>
          </Route>
          <Route path="/login">
          <Header/>
          <HeaderTwo/>
            <Login/>
          </Route>
         
          <Route path="/checkout">
          <Header/>
          <HeaderTwo/>
            <Checkout/>
          </Route>

          <Route path="/">
            <Header/>
          <HeaderTwo/>
            <Home/>
          </Route>

          
        </Switch>
      </div>

    </Router>
   

    
  );
}

export default App;
