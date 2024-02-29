import React, { useState } from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  
  return (
    <div className="navbar">
      <div className="leftSide" >
         <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/management"> ItemManagement </Link>
          <Link to="/shop"> Shop </Link>
          <Link to="/track"> Tracking </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/login" >Login</Link>
          <button className="btn btn-primary"><Link to="/login" className="nav-link">Login</Link></button>
                
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/shop"> Shop </Link>
       
        <Link to="/contact"> Contact </Link>
       
        <Link to="/login" >Login</Link>
        <button className="btn btn-primary"><Link to="/login" className="nav-link">Login</Link></button>
                
        
      </div>
    </div>
  );
}

export default Navbar;