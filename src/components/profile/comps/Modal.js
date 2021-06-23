import React from 'react';
import ReactDom from 'react-dom';

export default function Modal({open, children, onClose}){
    if(!open) return (<h1>Is open = false</h1>);

    return ReactDom.createPortal(
        <>
            <div className='modal'>
                {children}<br/>
                <button className='open-trade'
                        onClick={onClose}> Close</button>
            </div>
        </>
       , document.getElementById("portal")
    );  
}

/*


*/