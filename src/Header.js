import React,{useEffect,useState,useContext,useReducer} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import db from './firebase';

import {Link} from 'react-router-dom'

import { useHistory } from 'react-router-dom'

import {useSelector} from 'react-redux';
import {addUser} from './action'

import {useDispatch} from 'react-redux'

function Header() {

    const  cartReducer=useSelector(state=>state.cartReducer);
    const  authReducer=useSelector(state=>state.authReducer);
    const [name, setName] = useState('')
    const history=useHistory();

    const dispatch=useDispatch();

    const signout=(e)=>{
        e.preventDefault();

        db.auth().signOut().then(function() {
            console.log('Signed Out');
            dispatch(
                addUser(null)
            )
          }, function(error) {
            console.error('Sign Out Error', error);
          });
       
    }
 
    return (
        <div className="header">
            {/* LOGO */}
            <Link to="/">
              <img className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""/>
            </Link>

            {/* SEARCH BOX */}
            <div className="header__search">
                <input className="header__searchInput" type="text" placeholder="Search an item"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            
            {/* LINKS  */}
            <div className="header__nav">
                {/* 1st Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                       
                      
                        <span className="header__optionLineOne">Hello,{authReducer} </span>
                        {
                            authReducer?<span className="header__optionLineTwo" onClick={signout}>Sign Out</span>
                                       :<span className="header__optionLineTwo">Sign In</span>
                        }
                    </div>
                </Link>
                {/* 2nd Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns </span>
                        <span className="header__optionLineTwo">Orders</span>
                    </div>
                </Link>

                {/* 3rd Link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your  </span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout">
                    <div className="header__optionBasket">

                        {/* BASKET ICON */}
                        <ShoppingCartOutlinedIcon/>
                        {/* NUMBER OF ITEM */}
                        <span className="header__optionLineTwo header__basketCount">{cartReducer.length}</span>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Header
