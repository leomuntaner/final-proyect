import React, { PureComponent } from 'react';
import './modal.css'

const Modal = ({ show, close }) => {
    return (
        <> {show ?
            <div className="modal-container" onClick={()=> close()}>
                <main className="modal_content">This is modal content</main>
                <footer className="modal_footer">
                    <button className='open-trade modal-close' onClick={()=> close()}> Close</button>
                    <button className='open-trade submit'> Submit</button>
                </footer>
            </div>
            : null}
        </>);

}

export default Modal;