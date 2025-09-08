import React from 'react'
import "./NavBar.css"

export default function NavBar() {
  return (
      <nav className='nav-bar-section'>
        <div className='nav-logo'>
          <img src='' alt='' ></img>
        </div>
          <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>Our Projects</a></li>
            <li><a href=''>Our Services</a></li>
            <li><a className="nav-bar-contact-btn" href=''>Contact Us</a></li>
          </ul>
      </nav>
  )
}