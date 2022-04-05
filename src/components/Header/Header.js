import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-style'>
            <Link to='/home'>Home</Link>
            <Link to='/voluntears'>Voluntears</Link>
            <Link to='/main'>Main</Link>
        </div>
    );
};

export default Header;