import React, {useState, useEffect} from 'react';

export default function MPAsset() {

    const url = "http://localhost/php-proyecto/getMPLeverage.php"

    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState([]);

    useEffect(() =>{
    fetch(url)
        .then( res => res.json())
        .then((result)=>{
            setItem(result);
            setLoading(false)})
    },[] );
    
    if ( loading ) return <h1>LOADING...</h1>

    return (
        <div className="stats-box">
            <div>
                <h3>Most profitable Leverage</h3>
                <h1>{item[0].leverage}</h1>
                <h1>{item[0].proffits} USD</h1>
            </div>
        </div>
    );

}
