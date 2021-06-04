import React from 'react';
import { Navbar } from '../../common';
import logo from '../../../imgs/logo.png';
import { Link } from 'react-router-dom';


import './Header.css';

function Header (props) {

    const logOut = ()=>{
        props.getIn(false);
    }


    return(
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    <a href="/">
                         <img src={ logo } className="header-logo" />
                    </a>
                </section>
                <section className="header-top__navbar">
                    <section className="header-top__navigation">
                        <Navbar />
                    </section>
                    <hr className="header-top__separator" />
                </section>
            </section>

            <section className="header-bottom">
                <section className="header-bottom__statistics">
                    { props.connected ? <button onClick={logOut}>LogOut</button> : <Link to="/logIn" className="navbar-item">Log In</Link>}
                </section>

            </section>
        </section>
    )
}

export default Header;