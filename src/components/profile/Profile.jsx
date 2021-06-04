import React, {useState, useEffect} from 'react'
import './Profile.css';
import TradesTable from './comps/TradesTable';
import WinRate from './comps/WinRate';
import Proffits from './comps/Proffits';
    
function Profile (props) {
  
    return(
        <section className="profile" >
            <div className="profile-top">
                <div className="profile-top__winrate">
                        <WinRate />
                </div>
                <div className="profile-top__proffits">
                        <Proffits />
                </div>
            </div>
            <button className="open-trade">Open Trade</button>
            <div className="profile-bottom">
                    <h2>Active trades</h2>
                    <TradesTable />
            </div>
        </section>
    )
}

export default Profile;

