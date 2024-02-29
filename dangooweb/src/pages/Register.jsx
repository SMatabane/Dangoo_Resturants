import React, { useState } from 'react';
import '../styles/Register.css'; 
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterForm() {
   
    let navigate = useNavigate();

    const [user, setUser] = useState({
      
      user_type: "CUSTOMER", 
      
    });

    const [email, setemail]= useState('');
    const [first_name, setname]= useState('');
    const [last_name, setlast]= useState('');
    const [residential_address, setaddress]= useState('');
    const [cellphone_number, setnum]= useState('');
    const [password_hash, setpass]= useState('');
    const [user_type, setype]= useState('');


    
      async function onSubmit(event) {
        event.preventDefault();

        try{
            await axios.post("http://localhost:3001/users",
            {
                email:email,
                first_name:first_name,
                last_name:last_name,
                residential_address:residential_address,
                cellphone_number:cellphone_number,
                password_hash:password_hash,
                user_type:"CUSTOMER",
            });
            alert("Registered successuflly");
            navigate("/login");

        }
        catch(err){
            alert(err)
           
        }


        
      };

    return (
        <div className="register-container">
            <form className="register-form" >
                <h2>Register</h2>
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
                    <label htmlFor="fn">First Name</label>
                    <input type={"text"}  id="name" name="name"
                     placeholder="first_name" 
                    
                    value={first_name}
                    onChange={(e) => setname(e.target.value)}/>
                </div>


                <div className="form-group">
                    <label htmlFor="ln">Last Name</label>
                    <input type={"text"}  id="lname" name="name" placeholder="last_name" 
                    
                    value={last_name}
                    onChange={(e) => setlast(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type={"text"}  id="address" name="name" placeholder="address" 
                    
                    value={residential_address}
                    onChange={(e) => setaddress(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="num">Cellphone</label>
                    <input type={"text"}  id="phone" name="name" placeholder="phone" 
                    
                    value={cellphone_number}
                    onChange={(e) => setnum(e.target.value)}/>
                </div>


                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type={"password"}  id="password" name="name" placeholder="password" 
                    value={password_hash}
                    onChange={(e) => setpass(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-primary" onClick={onSubmit}>Register</button>
                

                
            </form>
        </div>
    );
}

export default RegisterForm;
