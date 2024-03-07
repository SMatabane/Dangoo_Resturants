
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/login.css';
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate,useHistory } from "react-router-dom";



function Login() {

    let navigate = useNavigate();

    const [email, setemail]= useState('');
    const [password_hash, setpass]= useState('');
   
    

    async function onSubmit(event) {
        event.preventDefault();

        try{
          const res=  await axios.post("http://localhost:3001/users/login",
            {
                email:email,
                password_hash:password_hash,
               
            });
            const  user_type=res.data.user_type
            if(user_type==='CUSTOMER'){alert("login successuflly");
            navigate("/items");}
            else {alert("Registered successuflly");
            navigate("/menus");}
            

        }
        catch(err){
            alert(err)
           
        }


        
      };

  

  return(
   
	  <div className="login-container">
            <form className="login-form" >
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                     type={"text"}  
                     placeholder="Email"
                     className="form-control"
                     name="name" 
                      value={email}
                      onChange={(e) =>setemail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type={"password"}  id="password" name="name" placeholder="password" 
                    value={password_hash}
                    onChange={(e) => setpass(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={onSubmit}>Login</button>
                <p>Don't have an account? <label><Link to="/register">Register</Link></label></p>
            </form>
        </div>);
    
}

export default Login;