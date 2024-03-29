import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/register-rbs'>RegisterRBS</Link>
                <Link to='/register-bs'>RegisterBS</Link>
            </nav>
        </div>
    );
};

export default Header;