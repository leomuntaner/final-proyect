import React, {useState, useEffect} from 'react'

export default function WinRate() {

    const [item, setItem] = useState([]);
    useEffect(() =>{
        fetch("http://localhost/php-proyecto/getWinRate.php")
        .then( res => res.json())
        .then(
            (result)=>{
                setItem(result);
            }
        )
    },[] );
    let total = item.length;
    let wins = 0;

    let WinRate = () => {
        for (let i=0; i<total;i++){
            if(item[i].priceStart < item[i].priceEnd && item[i].isLong == 1){
                wins ++;
            }
            if(item[i].priceStart > item[i].priceEnd && item[i].isLong == 0){
                wins ++;
            }
        }
        return (wins/total*100).toFixed(2);
    }

    return (
        <div>
            <h3>WinRate</h3>
            <h1> {WinRate()} % </h1>
        </div>
    );

}
