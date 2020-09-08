import React from 'react'
import './Home.css';

import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


function Home() {
    return (
        <div className="home">
            <img src="https://i.picsum.photos/id/533/200/200.jpg?hmac=HvhCl1BSaQrsbedBJm-X8gfnZGp_222QGZ-mYnstPiA" alt=""/>
            <input type="text" placeholder="Enter somthing"/>
            <button>
                <SearchIcon/>
            </button>
            <ArrowDropDownIcon/>
            <p>Hello Sign in Account <ArrowDropDownIcon/></p>
            <p>Retrun & orders <ArrowDropDownIcon/></p>
            <ShoppingCartOutlinedIcon/>

        </div>
    )
}

export default Home
