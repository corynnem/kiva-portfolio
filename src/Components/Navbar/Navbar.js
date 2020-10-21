import React from 'react';
import {BrowserRouter as Link} from "react-router-dom";
import './Navbar.css'

const Navbar = () => { 
 
 
    
    
    return(
        <div id="root" className='nav-fixed'>
            <Link to='/about'>
                <a href='/about' className='nav'>WHO ARE YOU</a>
            </Link>
            <Link to='/'>
                <a href='/' id='font' className='nav'>kiva</a>
            </Link>
            <Link to='/contact'>
                <a href='/contact' className='nav'>CONTACT</a>
            </Link>
            
        </div>
    );
  
};


export default Navbar;