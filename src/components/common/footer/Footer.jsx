import React from 'react'

import './Footer.css';

function Footer () {

    return(
        <section className="footer">
            <hr className="footer-separator" />
            <section className="footer-social-media">
                <a href="http://www.facebook.com">Social</a>
            </section>
            <section className="footer-info">
                <section className="footer-info-left">
                    Proyect TRADE
                </section>
                <section className="footer-info-center">
                    <section className="footer-info__email">
                        Email@hotmai.com
                    </section>
                    <section className="footer-info__terms">
                        Terms and Conditions
                        <br/>
                        Copyright
                    </section>
                </section>
                <section className="footer-info-right">
                <section className="footer-info__number">
                        Tel: +55 555-55 55 55
                    </section>
                    <section className="footer-info_contact">
                        My Story
                        <br/>
                        Contact Us
                    </section>
                </section>
            </section>
            <hr className="footer-separator" />
        </section>
    )
}

export default Footer;