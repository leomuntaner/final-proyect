import React from 'react';
import './Filters.css';
import FiltersTable from './comps/FiltersTable'
import NewFilter from './comps/NewFilter'

function Filters () {
    return(
        <section className="filters">
            <div className="filters-top">
                <NewFilter/>
            </div>
            
            <div className="filters-bottom">
                <FiltersTable/>
            </div>
            <h3> See more</h3>
        </section>
    )
}

export default Filters;