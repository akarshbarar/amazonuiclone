import React from 'react';

import './Checkout.css';


import cart from './cartservice';
function Checkout() {
    return (
        
        <div className="checkout">

            <div className="checkout__page">
                {
                    cart.length>0
                        ?<div className="checkout_PageData">

                            {
                                cart.map((product)=>(
                                    <div className="checkout__data">
                                        <h1>Title::{product.title}</h1>
                                        <h2>Rate::{product.rate}</h2>
                                        <h3>Price::{product.price}</h3>
                                        <img src={product.image} alt=""/>
                                     
                                    </div>
                                ))
                            }
                        </div>
                        :<div>
                            <h1>Your cart is empty</h1>
                        </div>
                }

            </div>
     </div>
    );
}

export default Checkout