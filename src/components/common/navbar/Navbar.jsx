import React from 'react';

import './Navbar.css';

function Navbar () {

    return(
        <section className="navbar">
            <a href="/" className="navbar-item">Home</a>
            <a href="/" className="navbar-item">Profile</a>
            <a href="/" className="navbar-item">Statistics</a>
            <a href="/" className="navbar-item">Filters</a>

        </section>
    )
}

export default Navbar;