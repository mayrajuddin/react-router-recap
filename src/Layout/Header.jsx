import React from 'react';
import {  NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='top'>
            <h2>BUKHARI ENT.</h2>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/">Contact</NavLink>
                <NavLink to="/">Blogs</NavLink>
            </nav>
        </div>
    );
};

export default Header;