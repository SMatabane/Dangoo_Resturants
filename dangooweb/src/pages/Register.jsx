import React, { useState } from 'react';
import '../styles/Register.css'; // Import your CSS file

function RegisterForm() {
   
   

    return (
        <div className="register-container">
            <form className="register-form" >
                <h2>Register</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text"  id="name" name="name" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text"  id="name" name="name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'"/>
                </div>
                <div className="form-group">
                    <label htmlFor="cellphone">Cellphone</label>
                    <input type="text"  id="name" name="name" placeholder="cellphone" onfocus="this.placeholder = ''" onblur="this.placeholder = 'cellphone'"/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text"  id="name" name="name" placeholder="address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'address'"/>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;
