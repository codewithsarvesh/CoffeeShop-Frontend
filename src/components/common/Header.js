import React from 'react';
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './vintage-logo-restaurant-food-drink-600nw-1431394568.jpg'

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Your Coffee Shop Logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
            <div className="user-options">


                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"><FaSearch /></button>
                </div>
            </div>
        </header>
    );
}

export default Header;
