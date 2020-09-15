import React,{useState} from 'react'
import './Admindashboard.css'

import db from './firebase'

import { Link,Redirect } from 'react-router-dom'

function Admindashboard() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [rate, setRating] = useState(0);
    const [price, setPrice] = useState(0);
    
    

    const signin =e=>{
        e.preventDefault();

        var data={
            title:title,
            description:description,
            imageLink:imageLink,
            rate:rate,
            price:price
        };


        // insert into amazon_itms set ?
        //! how to insert data in firebase database
        db.database().ref("Amazon_Items").push().set(data,(err)=>{
            if(err){
                console.error(err);
            }
            else{
                console.log("DATA SAVED")
            }
        })

    }
    return (
       
        <div className="admindashboard" >
            <Link to="/">
                <img 
                    className="admindashboard__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    />
            </Link>

            <div className="admindashboard__container">
                <h1>Add Elements</h1>
                <form>
                    <h5>Title</h5>
                    <input 
                        type="text" 
                        placeholder="Enter Title"
                        value={title} 
                        onChange={e=>setTitle(e.target.value)}
                        />

                    <h5>Description</h5>
                    <input 
                        type="text" 
                        placeholder="Enter Description"
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                        />
                    <h5>Image Link</h5>
                    <input 
                        type="text" 
                        placeholder="Enter Image Link"
                        value={imageLink}
                        onChange={e=>setImageLink(e.target.value)}
                        />
                    <h5>Rating</h5>
                    <input 
                        type="number" 
                        placeholder="Enter Rating"
                        value={rate}
                        onChange={e=>setRating(e.target.value)}
                        />

                <h5>Price</h5>
                    <input 
                        type="number" 
                        placeholder="Enter Price"
                        value={price}
                        onChange={e=>setPrice(e.target.value)}
                        />

                    <button 
                        type="submit"
                        onClick={signin}
                        className="admindashboard__signInButton">
                            Add
                    </button>
                </form>
               
            </div>
        </div> 
       
    )
}

export default Admindashboard
