import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  
  return (
    <>
     
      <div className="header_nav">

        <Link to='/'>
          <img className="logo" src={ logo } alt="" />
        </Link>

        <input type="checkbox" id="menu-bar" />
        <label for="menu-bar" onClick={ handleClick } > <i className={ click ? 'fas fa-times' : 'fas fa-bars' } /></label>

        <nav className="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </nav>
      </div>
    </>

  );
}

export default Navbar;