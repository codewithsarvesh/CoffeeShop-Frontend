import React from 'react';
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header>
            <div className="logo">
                <img src="your-logo.png" alt="Your Coffee Shop Logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="user-options">
                <ul>
                    <li><a href="#"><FaUser /></a></li>
                    <li><a href="#"><FaHeart /></a></li>
                    <li><a href="#"><FaShoppingCart /></a></li>
                </ul>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><FaSearch /></button>
                </div>
            </div>
        </header>
    );
}

export default Header;
