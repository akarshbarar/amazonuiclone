import React,{useContext,useState,useEffect} from 'react';

import './Checkout.css';

import {useSelector,useDispatch} from 'react-redux';
import {removeFromBasket} from './action';
import { Link,useHistory } from 'react-router-dom'

import { loadStripe } from "@stripe/stripe-js";

import {addMessage,addResult} from './action'
import data from './keys.json';
const stripePromise = loadStripe(data.KEY);


function Checkout() {

    const  cartReducer=useSelector(state=>state.cartReducer);
    const [price,setPrice]=useState(0);
    const dispatch=useDispatch();
    const [message, setMessage] = useState("");
    const history=useHistory();

 function remove(product){
    
    console.log(product);
    for(let i in cartReducer){
        if(cartReducer[i].title==product){
            cartReducer.splice(i,1);
        }
    }
    dispatch(
        removeFromBasket(cartReducer)
    )
 }

 const handleClick = async (event) => {

    console.log("CLICKED HANDLED CLICK")
    const stripe = await stripePromise;

    let data={
        "price":parseInt(price)
    };
    const response = await fetch(`https://amaubackend.herokuapp.com/create-session/${price}`, {

      method: "POST",
    });

    console.log(response)
    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.

    const result = await stripe.redirectToCheckout({

      sessionId: session.id,

    });

    dispatch(addResult(session.id));
    if (result.error) {

      // If `redirectToCheckout` fails due to a browser or network

      // error, display the localized error message to your customer

      // using `result.error.message`.
      console.log(result.error)

    }

  };


    useEffect(() => {
       
        let x=0;
        cartReducer.map((product)=>{
            x=parseInt(x)+(parseInt(product.price));
        });
        setPrice(x);


            // Check to see if this is a redirect back from Checkout

    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {

      setMessage("Order placed! You will receive an email confirmation.");
      dispatch(addMessage("Order placed! You will receive an email confirmation."));
      history.push('/confirm')

    }

    if (query.get("canceled")) {

      setMessage(

        "Order canceled -- continue to shop around and checkout when you're ready."

      );
      dispatch(addMessage("Order canceled -- continue to shop around and checkout when you're ready."));

      history.push('/confirm')

    }
    }, []);

    return (
        
        <div className="checkout">

            <div className="checkout_price">

            {
                cartReducer.length>0
                ?<div >
                    Buy Items<button className="checkout_PageButton" onClick={handleClick}>Pay Rs {price}</button>
                </div>
                :<div>
                    <h6>Please Buy something</h6>
                </div>
            }
            </div>
            <div className="checkout__page">
                {
                    cartReducer.length>0
                        ?<div className="checkout_PageData">

                            {
                                cartReducer.map((product)=>(
                                    <div className="checkout__data">
                                        <h1>Title::{product.title}</h1>
                                        <h2>Rate::{product.rate}</h2>
                                        <h3>Price::{product.price}</h3>
                                        <img src={product.image} alt=""/>
                                        <button onClick={()=>remove(`${product.title}`)}>Remove From Cart</button>

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
