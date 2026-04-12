import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div className='top'>
            <h2>BUKHARI ENT.</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Blogs</Link>
            </nav>
        </div>
    );
};

export default Header;