import React,{useState} from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import db from './firebase';
import {useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addUser} from './action'


function Register() {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const dispatch=useDispatch();

const history=useHistory();


const signup= e =>{
    e.preventDefault();
    if(password===confirmPassword){
        console.log(email);
        console.log(password)


        db.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((e)=>{
            console.log("SIGNED IN");
            e.user.updateProfile({
                displayName: name
            });
            dispatch(
                addUser(name)
            )
            console.log(e)

            db.database().ref("Users").child(e.user.uid).set({
                "name":name,
                "email":email,
                "password":password,
                "uid":e.user.uid
            },(err)=>{
                if(err){
                    console.error(err);
                }
                else{
                    console.log("DATA SAVED")
                    history.push('/');// client side rendering to HOME PAGE
                    
                }
            })
        })
        .catch(function(error) {
            // Handle Errors here.
            alert(error.message);
            // ...
          });
    }
    else{
        alert("PASSWORD DOESN'T MATCH ")
    }
}

    return (
        <div className="register" >
        <Link to="/">
            <img 
                className="register__logo"
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
        </Link>

        <div className="register__container">
            <h1>Sign Up</h1>
            <form>

                 <h5>Name</h5>
                <input 
                    type="text" 
                    placeholder="Enter Name"
                    value={name} 
                    onChange={e=>setName(e.target.value)}/>

                <h5>E-Mail</h5>
                <input 
                    type="email" 
                    placeholder="Enter Email"
                    value={email} 
                    onChange={e=>setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input 
                    type="password" 
                    placeholder="Enter Password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    />
                <h5>Confirm Password</h5>
                <input 
                    type="password" 
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={e=>setConfirmPassword(e.target.value)}
                    />
                <button 
                    type="submit"
                    onClick={signup}
                    className="register__signInButton">
                        SignUp
                </button>
            </form>
           
            <Link to="/login">

            <button className="register__registerButton"> Already have a account</button>
            </Link>
        </div>
    </div>
    )
}

export default Register
