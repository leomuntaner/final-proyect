import React, { PureComponent } from 'react';
import NewFilter from './NewFilter'

const ModalFilter = ({ show, close }) => {
    return (
        <> {show ?
            <div className="modal-container" >
                <main className="modal_content">
                    <div className="filters-top">
                        <NewFilter />
                    </div></main>
            </div>
            : null}
        </>);

}

export default ModalFilter;