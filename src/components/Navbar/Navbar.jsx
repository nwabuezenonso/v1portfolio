import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (

        <nav>
            <div className="logo">
                CHINONSO
            </div>

            <div className="hamburger_menu">
                <div></div>
                <div></div>
                <div></div>
                <p>menu</p>
            </div>

            <div className='navbar_overlay'>

            </div>
        </nav>
    )
}


export default Navbar;