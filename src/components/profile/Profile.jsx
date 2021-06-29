import React, {useState} from 'react';
import TradesTable from './comps/TradesTable';
import WinRate from './comps/WinRate';
import Proffits from './comps/Proffits';
import './Profile.css';
import Modal from './comps/Modal'


function Profile (props) {

    const [isOpen, setIsOpen] = useState(false);
    const Toggle = () => {setIsOpen(!isOpen)};


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

            <div>
                <button onClick={Toggle} 
                        className='open-trade'>Open Trade
                </button>
                <Modal  show={isOpen} close={Toggle}/>
            </div>
            <div className="profile-bottom">
                    <h2>Active trades</h2>
                    <TradesTable />
            </div>
        </section>
    )
}

export default Profile;
