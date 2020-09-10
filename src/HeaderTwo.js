import React from 'react'
import './HeaderTwo.css'
import { Link } from 'react-router-dom'
function HeaderTwo() {
    return (
        <div className="headerTwo">
           <div className="headerTwo__link">
                <Link to="/">
                    <span>Todays Deal</span>
                </Link>
                <Link to="/">
                    <span>Todays Deal</span>
                </Link>
                <Link to="/">
                    <span>Todays Deal</span>
                </Link>
                <Link to="/">
                    <span>Todays Deal</span>
                </Link>
                <Link to="/">
                    <span>Todays Deal</span>
                </Link>
           </div>
        </div>
    )
}

export default HeaderTwo
