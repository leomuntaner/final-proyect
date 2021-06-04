import React from 'react';
import img_big from '../../imgs/img_big.png';
import img_accounting from '../../imgs/accounting.png';
import img_stats from '../../imgs/stats.png';
import img_tracking from '../../imgs/tracking.png';


import './Home.css';

function Home () {

    return(
        <section className="home">
           <section className="home-top">
                <h1 className="home-top__text">Welcome to the world of magic internet money</h1>
                <img src={img_big} className="home-top__img"/>
                <hr className="home-separator" />
            </section>
            <section className="home-bottom">
                <div className="home-bottom__feature">
                    <div className="home-bottom__feature-img">
                         <img src={img_stats} className="home-bottom__feature-img"/>
                    </div>
                    <div className="home-bottom__feature-text">
                    <h1> CUSTOM STATISTICS </h1><br/>
                        <h3> Make a detailed and personalized follow-up of all your trades. <br/> 
                            Generate filters based on your needs to never make the same mistake twice<br/> 
                             Make the most of the vast amount of statistics and  discover your strengths and weaknesses.
                        </h3>
                    </div>
                </div>
                <hr className="home-separator" />
                <div className="home-bottom__feature">
                    <div className="home-bottom__feature-text2">                      
                        <h1>KEEP YOUR ACCOUNTING UP TO DATE</h1><br/>
                        <h3>
                            Simplify the accounting of all your transactions on a single platform.<br/>
                            Don't miss a penny!
                        </h3>
                    </div>
                    <div className="home-bottom__feature-img2">
                         <img src={img_accounting} className="home-bottom__feature-img2"/>
                    </div>
                </div>
                <hr className="home-separator" />
                <div className="home-bottom__feature">
                    <div className="home-bottom__feature-img3">
                         <img src={img_tracking} className="home-bottom__feature-img3"/>
                    </div>
                    <div className="home-bottom__feature-text">                     
                    <h1>REAL-TIME TRACKING OF ALL YOUR ASSETS</h1><br/>
                        <h3>
                            Thanks to the implementation of BSC API you can follow all your assets and transactions with updated prices.
                        </h3>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home;

