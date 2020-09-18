import React,{useContext} from 'react'
import './Product.css'

import cart from './cartservice';
import {DataContext } from './DataContext';


function Product({title,image,price,rating}) {
    const [cart,setCart]=useContext(DataContext);

   
    function addtocart(title,image,price,rate){


        setCart(state=>[...state,{
            title:title,
            image:image,
            rate:rate,
            price:price,
        }])
        
        console.log(cart)
    }
  

    return (
        <div className="product">

            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>Rs</small><strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_)=>(
                            <p>{rating}:Stars</p>
                        ))
                    }
                </div>
            </div>  
            <img src={image} alt=""/>
            <button onClick={()=>addtocart(`${title}`,`${image}`,`${price}`,`${rating}`)}>Add to Cart</button>
        </div>
    )
}

export default Product
