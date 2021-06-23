import React, {useState, useEffect} from 'react'
import TradesTable from './comps/TradesTable';
import WinRate from './comps/WinRate';
import Proffits from './comps/Proffits';
import Modal from './comps/Modal'
import './Profile.css';
    
function Profile (props) {

    const [isOpen, setIsOpen] = useState(false);
  
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
                <button onClick={() => setIsOpen(true)} 
                        className='open-trade'>Open Trade
                </button>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    AGREGAR TRADE
                </Modal>
            </div>
            <div className="profile-bottom">
                    <h2>Active trades</h2>
                    <TradesTable />
            </div>
        </section>
    )
}

export default Profile;

