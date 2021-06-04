import React, {useState, useEffect} from 'react'

export default function Proffits() {

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
    let benefit = 0;
     
    let prof = () => {
        for (let i=0; i<total;i++){
            let totalInput = item[i].leverage * item[i].usdAmount;
            if(item[i].isLong == 1){
                 benefit = benefit + ((totalInput/item[i].priceStart)*item[i].priceEnd );
            }
            else{
                 benefit = benefit + (totalInput - (totalInput/item[i].priceStart)*item[i].priceEnd );
            }
        }
        return  benefit.toFixed(2);
    }

    return (
        <div>
            <h3>Total proffits</h3>
            <h1> { prof() } USD </h1>
        </div>
    );

}
