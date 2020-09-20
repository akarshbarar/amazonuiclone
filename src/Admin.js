import React,{useState} from 'react'
import './Admin.css'
import { Link,Redirect,useHistory } from 'react-router-dom'
import db from './firebase';

import {useDispatch} from 'react-redux'

import {addAdmin} from './action'

function Admin() {


    const dispatch=useDispatch();


    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const history=useHistory();

    const signin =e=>{
        e.preventDefault();

        if(userName==="adminakki@gmail.com"){

            db.auth().signInWithEmailAndPassword(userName,password).then((e)=>{
                dispatch(
                    addAdmin("ADMIN")
                )

                history.push('/admindashboard')
            }).catch((error)=>{
                if(error){
                    alert(error.message)
                }
            });

        }else{
            alert("WRONG CREDENTIALS")
            history.push('/')
        }
    }
    return (
       
             <div className="admin" >
            <Link to="/">
                <img 
                    className="admin__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    />
            </Link>

            <div className="admin__container">
                <h1>Admin Sign In</h1>
                <form>
                    <h5>Username</h5>
                    <input 
                        type="text" 
                        placeholder="Enter Usenamw"
                        value={userName} 
                        onChange={e=>setUserName(e.target.value)}
                        />

                    <h5>Password</h5>
                    <input 
                        type="password" 
                        placeholder="Enter Password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        />
                    <button 
                        type="submit"
                        onClick={signin}
                        className="admin__signInButton">
                            SignIn
                    </button>
                </form>
               
            </div>
        </div> 
       
    )
}

export default Admin
