import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



import Login from './Login';
import Checkout from './Checkout';
import Header from './Header';

function App() {
  return (
    <Router>
       <div className="app">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
         
          <Route path="/checkout">
            <Checkout/>
          </Route>

          <Route path="/">
            <Header/>
            {/* <img src="https://i.picsum.photos/id/533/200/200.jpg?hmac=HvhCl1BSaQrsbedBJm-X8gfnZGp_222QGZ-mYnstPiA" alt=""/>
              <input type="text" placeholder="Enter somthing"/>
              <button>
                  <SearchIcon/>
              </button>
              <ArrowDropDownIcon/>
              <p>Hello Sign in Account <ArrowDropDownIcon/></p>
              <p>Retrun & orders <ArrowDropDownIcon/></p>
              <ShoppingCartOutlinedIcon/> */}
          </Route>
        </Switch>
      </div>

    </Router>
   

    
  );
}

export default App;
