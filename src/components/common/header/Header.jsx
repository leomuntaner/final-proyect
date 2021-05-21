import React from 'react';
import { Navbar } from '../../common';

import './Header.css';

function Header () {

    return(
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    <a href="/">
                         <img src="https://freepikpsd.com/media/2019/10/Profit-PNG-Photos.png" className="header-logo" />
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
                <section className="header-bottom__profile">
                    User
                </section >
                <section className="header-bottom__statistics">
                    Log Out
                </section>

            </section>
        </section>
    )
}

export default Header;