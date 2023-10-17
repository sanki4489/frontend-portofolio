import React from "react";
import './NavBar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import contact from '../assets/contact.png';


const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">Clients</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Abouts</Link>
      </div>  
      <button className="desktopMenuBtn">
        <img src={contact} alt="Contact" className="desktopMenuImg"/>Contact me
      </button>
    </nav>   
  )
}

export default NavBar;
