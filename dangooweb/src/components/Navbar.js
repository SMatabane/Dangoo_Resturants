import React, { useState } from "react";
import Logo from "../img/logo.png";
import { Link,useHistory } from "react-router-dom";



import "../styles/Navbar.css";

function Navbar() {
  
  return (
    <div className="navbar">
      <div className="rightSide">
         <img src={Logo} />
         <div className="hiddenLinks">
          <Link to="/home"> Home </Link>
          <Link to="/management"> Management </Link>
          <Link to="/shop"> Shop </Link>
          <Link to="/track"> Tracking </Link>
          <Link to="/contact"> Contact </Link>
          
                
        </div>
      </div>
      <div className="rightSide">
        <Link to="/home"> Home </Link>
        <Link to="/shop"> Shop </Link>
        <Link to="/about"> About </Link>
        <Link to="/track"> Tracking </Link>
        <Link to="/contact"> Contact </Link>
        

        </div>
        
                
        
      
    </div>
  );
}

export default Navbar;