
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/login.css';
import RegisterForm from "./Register";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login() {

    let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password_hash: "",

    
  });

  const { email, password_hash} = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users/login", user);
    navigate("/");
  };

  return(
   
	  <div className="login-container">
            <form className="login-form" onSubmit={(e) => onSubmit(e)}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text"  id="name" name="name" placeholder="Email"
                     onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Email'"
                      value={email}
                      onChange={(e) => onInputChange(e)}
                      />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text"  id="password" name="name" placeholder="password" 
                    onfocus="this.placeholder = ''" 
                    onblur="this.placeholder = 'password'"
                    value={password_hash}
                    onChange={(e) => onInputChange(e)}/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <p>Don't have an account? <label><Link to="/register">Register</Link></label></p>
            </form>
        </div>);
    
}

export default Login;