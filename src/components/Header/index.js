import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdContactPhone } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import './index.css';
function Header() {
    return (
        <div>
           
            <nav className="navbar">
                
                <img src="https://via.placeholder.com/50" alt="Logo" className="logo" />
               <h1>Mohammed Khan</h1>
                <div className='nav-icons'>
                 <Link to="/home" className="nav-link"><FaHome /></Link>
                <Link to="/about" className="nav-link"><FcAbout /></Link>
                <Link to="/contact" className="nav-link"><MdContactPhone /></Link>
                <Link to="/services" className="nav-link"><GrServices /></Link>
                </div>
            
              </nav>

      </div>
  
  );
}

export default Header;
