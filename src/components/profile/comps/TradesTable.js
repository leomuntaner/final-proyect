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

    const long = 'LONG';
    const short = 'SHORT';
    const eth = 'ETH';
    const btc = 'BTC';
    
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
                        <td>{item.isLong == 1 ? long : short }</td>
                        <td>{item.assetId == 1 ? btc : eth }</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>);
}
