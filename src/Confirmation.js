import React,{useEffect} from 'react'
import msg from './msg';
import './Confirmation.css'
import responce from './result';

import {useDispatch} from 'react-redux';

import { useSelector } from 'react-redux';

import { removeFromBasket } from './action';

function Confirmation() {

    const resultReducer = useSelector(state => state.resultReducer);
    const  cartReducer=useSelector(state=>state.cartReducer);
    const messageReducer = useSelector(state => state.messageReducer);

    const dispatch = useDispatch();

    useEffect(() => {


        cartReducer.splice(0, cartReducer.length);

        dispatch(
            removeFromBasket(cartReducer)
        )
    }, [])

    return (
        <div className="confirmation">
            <h1>{messageReducer}</h1>
            <h3>{resultReducer}</h3>
        </div>
    )
}

export default Confirmation
