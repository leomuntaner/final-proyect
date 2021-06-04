import React from 'react';
import './Stats.css';
import LastTrades from './comps/LastTrades';
import MPAsset from './comps/MPAsset';
import MPFilter from './comps/MPFilter';
import MPLeverage from './comps/MPLeverage';
import MPTrade from './comps/MPTrade';
import MPTradePercent from './comps/MPTradePercent';
import MPTradeType from './comps/MPTradeType';





function Stats () {
    return(
        <section className="stats">
            <div className="stats-top">
                <div className="stats-top__stat">
                    <MPFilter/>
                </div>
                <div className="stats-top__stat">
                   <MPAsset/>
                </div>
                <div className="stats-top__stat">
                  <MPLeverage/>
                </div>
                <div className="stats-top__stat">
                    <MPTradeType/>
                </div>
                <div className="stats-top__stat">
                   <MPTradePercent/>
                </div>
                <div className="stats-top__stat">
                    <MPTrade/>
                </div>

            </div>
            <h1> Last closed trades.</h1>
            <div className="stats-bottom">
                <LastTrades/>
            </div>
        </section>
    )
}

export default Stats;