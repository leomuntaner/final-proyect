import React, {useState, useEffect} from 'react';

export default function MPTradePercent() {

    const url = "http://localhost/php-proyecto/getMPTrade.php"

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

    const total = item.length;
    let MPTrade = 0;
    for (let i=0; i<total;i++){
        let thisTrade = item[i].proffits / item[i].usdAmount * 100;
        if(thisTrade > MPTrade){
            MPTrade = thisTrade;
        }
    }   

    return (
        <div className="stats-box">
            <h3>Most profitable Trade</h3>
            <h1>{MPTrade.toFixed(2)} %</h1>
        </div>
    );

}

