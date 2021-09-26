// ---------------------------
// |   Component: Header     |
// ---------------------------
import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <div className="header-details">
                <h1>Welcome To <span>Legends</span></h1>
                <h2>Hire Us</h2>
                <h4>We provide highly skilled professionals to complete your task and we called them <span>Legends</span></h4>
                <h3>Maximum Budget: $ <span>50 Million</span></h3>
            </div>
        </div>
    );
};

export default Header;