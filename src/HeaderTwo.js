import React from 'react'
import './HeaderTwo.css'
import { Link } from 'react-router-dom'
import db from './firebase';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { useHistory } from 'react-router-dom'



function HeaderTwo() {

    const history=useHistory();

    const signout = e => {
        db.auth().signOut().then(function() {
            // Sign-out successful.
            console.log("SIGN OUT SUCCESSFULL")
            history.push('/')

          }).catch(function(error) {
            // An error happened.
            console.log("ERROR")
          });
          

    }

    return (
        <div className="headerTwo">
           <div className="headerTwo__options">
            
                <div className="headerTwo__optionDeliver">
                <LocationOnOutlinedIcon/>
                        <div className="headerTwo__optionDeliverSpan">
                            <span>Deliver to</span>
                            <span>India</span>
                        </div>
                </div>
              
            
              <div className="headerTwo__optionLinks">
                <Link to="/" className="headerTwo__link">
                        <span>Today's Deal</span>
                    </Link>
                    <Link to="/" className="headerTwo__link">
                        <span>Customer Service</span>
                    </Link>
                    <Link to="/" className="headerTwo__link">
                        <span>Gift Card</span>
                    </Link>
                    <Link to="/" className="headerTwo__link">
                        <span>Registry</span>
                    </Link>
                    <Link to="/" className="headerTwo__link">
                        <span>Sell</span>
                    </Link>
              </div>
               
                

                <div className="">
                    <span>Amazon's response to Covid-19</span>
                    <button  onClick={signout}> Sign out</button>
                </div>
           </div>
        </div>
    )
}

export default HeaderTwo
