import React from 'react';


function Header() {
    return (
        <header>
            <div className="logo">
                <img src="your-logo.png" alt="Your Coffee Shop Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
