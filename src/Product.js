import React,{useContext} from 'react';
import './Product.css';

import {useSelector,useDispatch} from 'react-redux';
import {addToBasket} from './action';
import { useHistory } from 'react-router-dom';

function Product({title,image,price,rating}) {

    const dispatch=useDispatch();
    const  authReducer=useSelector(state=>state.authReducer);
    const history=useHistory();

    function addtocart(title,image,price,rate){

        if(authReducer){
            dispatch(
                addToBasket({
                    title:title,
                    image:image,
                    rate:rate,
                    price:price,
                })
            )
        }
        else{
            alert("Please login first before adding item to cart!");
            history.push('/login');
        }  
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
