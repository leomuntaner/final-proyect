import React, {useState, useEffect} from 'react';

export default function MPTradeType() {

    const url = "http://localhost/php-proyecto/getMPTradeType.php"

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

    let tradeType = "";
    let tradeCount = 0;
    if (item[0].total >  item[1].total) {
        tradeType = "SHORT";
        tradeCount = item[0].total;
    }
    else{
        tradeType = "LONG";
        tradeCount = item[1].total;
    }

    return (
        <div className="stats-box">
            <h3>Best Trade Type</h3>
            <h1>{tradeType}</h1>
            <h1>{tradeCount} times</h1>
        </div>
    );

}
