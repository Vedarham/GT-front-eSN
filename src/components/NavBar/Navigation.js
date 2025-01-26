import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 
import "./Navigation.css";
import Logo from "../../assets/images/EN-logo.png"

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
     
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className="logo">
        <a href="/">
          <img src={Logo} alt="eSports_Nation_Logo" className="logo-img" />
        </a>
      </div>
   
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
      {/* this state is temporarily added onClick it will be active and on ful-screencit will automatic close */}
        <div className="nav-left">
          <a href="/" className="nav-link">Home</a>
          <a href="/GT-front-eSN/tournaments" className="nav-link">Tournaments</a>
          <a href="/GT-front-eSN/leaderboards" className="nav-link">Leaderboards</a>
          {/* <a href="/news" className="nav-link">News</a> */}
          <a href="/GT-front-eSN/shop" className="nav-link">Shop</a>
          <a href='/GT-front-eSN/profile' className='nav-link'>Profile</a>
        </div>
        <div className="nav-right">
          <a href="/GT-front-eSN/Event-Organizers" className="nav-link">Organizers</a>
          <a href="/GT-front-eSN/subscription" className="nav-link">Subscription</a>
          <a href="/GT-front-eSN/FAQ" className="nav-link">FAQ</a>
          <a href="/GT-front-eSN/ContactForm" className="nav-link">Contact Us</a>
          <a href="/GT-front-eSN/about-us" className="nav-link">About Us</a>        
        <a href="/GT-front-eSN/login" className="nav-link login-btn">Login</a>
    
        </div>
       
      </div>
      
    </nav>
  );
};

export default Navigation;