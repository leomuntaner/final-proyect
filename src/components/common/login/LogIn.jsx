import React, {useRef, useState} from 'react';
import './LogIn.css';

const URL_LOGIN = "http://localhost/php-proyecto/login.php";

const sendUserData = async ( url , data ) =>{
    const resp = await fetch( url, {
        method: 'POST',
        body: JSON.stringify( data ),
        headers: {
            'Content-Type': 'application/json'
        }
    } );
    const json = await resp.json();
    return json;
}


function LogIn (props) {

    const[error, setError]= useState(null);
    const [wait, setWait]= useState(false);

    const refUser = useRef(null);
    const refPass= useRef(null);

    const handleLogin= async ()=>{
        setWait(true);
        const userData = {
            "user" : refUser.current.value,
            "pass" : refPass.current.value
        };
        const respJson = await sendUserData ( URL_LOGIN , userData );
        console.log("respuesta", respJson);

        props.getIn( respJson.connected )
        setError( respJson.error );
        setWait(false);
    }


    return(
        <section className="login modal-content animate">
            <h1> ENTER YOUR CREDENTIALS</h1>
            <div  className="card">
                <input type="text" 
                        placeholder="user" 
                        aria-label="Username"
                        ref={ refUser } />
                <input type="password"
                        placeholder="password"
                        aria-label="password"
                        ref={refPass}/>
                <br/><br/>
                
                <button 
                    onClick={handleLogin}
                    disabled= { wait }>ENTER
                </button>
                {
                    error && 
                    <h2>
                        {error}
                    </h2>
                }
                <br/><br/>
            </div>
        </section>
    )
}

export default LogIn;