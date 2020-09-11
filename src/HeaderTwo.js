import React from 'react'
import './HeaderTwo.css'
import { Link } from 'react-router-dom'


import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
function HeaderTwo() {
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
                </div>
           </div>
        </div>
    )
}

export default HeaderTwo
