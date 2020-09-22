import React, { useEffect } from 'react';
import './App.css';

import { HashRouter as Router, Switch, Route } from "react-router-dom"



import Login from './Login';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Register from './Register';
import HeaderTwo from './HeaderTwo';
import Admin from './Admin';
import Admindashboard from './Admindashboard';
import db from './firebase';
import Confirmation from './Confirmation';
import {addUser} from './action'

import {useDispatch} from 'react-redux'


function App() {

  const dispatch=useDispatch();

  useEffect(()=>{

    db.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        dispatch(
          addUser(user.displayName)
        )
      } else {
        // No user is signed in.
        dispatch(
          addUser(null)
        )
      }
    });
  },[]);

  return (

      <Router>
        <div className="app">
          <Switch>
          <Route path="/confirm">
              <Header />
              <HeaderTwo />
              <Confirmation />
            </Route>
            <Route path="/admindashboard">
              <Header />
              <HeaderTwo />
              <Admindashboard />
            </Route>
            <Route path="/admin">
              <Header />
              <HeaderTwo />
              <Admin />
            </Route>
            <Route path="/signup">
              <Header />
              <HeaderTwo />
              <Register />
            </Route>
            <Route path="/login">
              <Header />
              <HeaderTwo />
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <HeaderTwo />
              <Checkout />
            </Route>
            <Route path="/">
              <Header />
              <HeaderTwo />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>


  );
}

export default App;
