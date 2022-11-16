import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-div">
            <div className="left-div">
                <img src={logo} alt=""/>
            </div>
            <div className="right-div">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/orders">Orders</Link>
            </div>
        </div>
    );
};

export default Header;