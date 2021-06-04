import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar () {

    return(
        <section className="navbar">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/profile" className="navbar-item">Profile</Link>
            <Link to="/stats" className="navbar-item">Stats</Link>
            <Link to="/filters" className="navbar-item">Filters</Link>
        </section>
    )
}

export default Navbar;