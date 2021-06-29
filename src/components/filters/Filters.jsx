import React, {useState} from 'react';
import './Filters.css';
import FiltersTable from './comps/FiltersTable';
import ModalFilter from './comps/ModalFilter';

function Filters () {

    const [isOpen, setIsOpen] = useState(false);
    const Toggle = () => {setIsOpen(!isOpen)};

    return(
        <section className="filters">

            <div>
                <button onClick={Toggle} 
                        className='open-trade'>Create Filter
                </button>
                <ModalFilter  show={isOpen} close={Toggle}/>
            </div>
            <div className="filters-bottom">
                <FiltersTable/>
            </div>
            <h3> See more</h3>
        </section>
    )
}

export default Filters;