import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/login.css';
import { Link } from "react-router-dom";
import RegisterForm from "./Register";


function Login() {

  return(
   
	  <div className="login-container">
            <form className="login-form" >
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text"  id="name" name="name" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text"  id="name" name="name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'"/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <p>Don't have an account? <label><Link to="/register">Register</Link></label></p>
            </form>
        </div>);
    
}

export default Login;