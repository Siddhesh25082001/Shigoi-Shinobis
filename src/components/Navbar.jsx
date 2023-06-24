import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/logo.png'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Sugoi Shinobis Website" />
            </div>
            <div className="menu">
                <ul>
                    <li><Link className="menuItem" to="#banner">Home</Link></li>
                    <li><Link className="menuItem" to="#about">About Us</Link></li>
                    <li><Link className="menuItem" to="#collection">Collections</Link></li>
                    <li><Link className="menuItem" to="#community">Community</Link></li>
                    <li><Link className="menuItem" to="#contact">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar