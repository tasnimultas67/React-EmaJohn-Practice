import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'


const Header = () => {
    return (
        <div>
            <img src={logo} alt="logo" className='site-logo' />
            <nav className='navbar'>
                <a href="/shop" className='nav-item'>Shop</a>
                <a href="/oder-review" className='nav-item'>Order Review</a>
                <a href="/manage-inventory" className='nav-item'>Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;