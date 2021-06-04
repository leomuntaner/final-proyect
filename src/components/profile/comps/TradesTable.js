import React, {useState, useEffect} from 'react'

export default function TradesTable() {

    const [item, setItem] = useState([]);
    useEffect(() =>{
        fetch("http://localhost/php-proyecto/getOpenTrades.php")
        .then( res => res.json())
        .then(
            (result)=>{
                setItem(result);
            }
        )
    },[] );
    
    return ( 
        <table className="table">
            <thead className="">
                <tr>
                    <th>Buy Price</th>
                    <th>Sell Price</th>
                    <th>Leverage</th>
                    <th>isLong</th>
                    <th>assetId</th>
                </tr>
            </thead>
            <tbody>
                {item.map(item => (
                    <tr key={item.id}>
                        <td>{item.priceStart}</td>
                        <td>{item.priceEnd}</td>
                        <td>{item.leverage}</td>
                        <td>{item.isLong}</td>
                        <td>{item.assetId}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>);
}
