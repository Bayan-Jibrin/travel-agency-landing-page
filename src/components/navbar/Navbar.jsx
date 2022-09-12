import React from 'react';
import './navbar.css';
import logo from '../../assets/Logo.svg'

const Navbar = () => {
  return (
    <div className='travel__navbar'>
      <div className='travel__navbar-logo'>
        <img src={logo} alt="logo" />
      </div>

      <div className='travel__navbar-links'>
          <p><a href='#desitnations'>Desitnations</a></p>
          <p><a href='#b'>Hotels</a></p>
          <p><a href='#flights'>Flights</a></p>
          <p><a href='#bookings'>Bookings</a></p>
          <p><a href='#e'>Login</a></p>
      </div>
      
      <div className='travel__navbar-sign'>
          <button type='button'>Sign up</button>
          <select name='language'>
            <option value='English' selected>EN</option>
          </select> 
      </div>
    </div>
  )
}

export default Navbar