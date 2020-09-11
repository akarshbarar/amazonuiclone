import React,{useState} from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
            
    const signin= e =>{

        e.preventDefault();//PREVENT PAGE FROM RELOADING

        console.log(email);
        console.log(password)
        
    }
    
    return (
        <div className="login" >
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input 
                        type="email" 
                        placeholder="Enter Email"
                        value={email} 
                        onChange={e=>setEmail(e.target.value)}
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
                        className="login__signInButton">
                            SignIn
                    </button>
                </form>
                <p>By Signing-in, you agree to Amazon FAKE CLONE Conditions of Use and Privacy Notice. </p>

                <Link to="/signup">
                    <button className="login__registerButton"> Create Your New Account</button>
                </Link>
            </div>
        </div>
    )
}

export default Login
