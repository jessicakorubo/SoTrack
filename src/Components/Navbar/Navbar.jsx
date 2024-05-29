import React, { useState } from 'react';
import './Navbar.css'
import hamburger from '../../assets/icon_hamburger.png';

const Navbar = () => {

  const [isopen, setIsOpen] = useState(false);

  function toggleMenu (){
    setIsOpen(!isopen)
  }

  return (
    <div className='nav'>

      <div className="nav-logo">SO-track</div>

      <ul className= {`nav-menu ${isopen ? 'open' : ''}`}>
        <li>Home</li>
        <li>About</li>
        <li>Explore</li>
        <li>Contact</li>
        <li className='nav-register'>Register</li>
      </ul>

      <img className='hamburger' onClick={toggleMenu} src={hamburger} alt="" />
    </div>
  )
}

export default Navbar