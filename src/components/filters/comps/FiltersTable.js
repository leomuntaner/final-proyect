import React, {useState, useEffect} from 'react'

export default function FiltersTable() {

    const [item, setItem] = useState([]);
    useEffect(() =>{
        fetch("http://localhost/php-proyecto/getFilters.php")
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
                    <th>Filters</th>
                    <th className="mod-filter">Edit</th>
                    <th className="mod-filter">Delete</th>
                </tr>
            </thead>
            <tbody>
                {item.map(item => (
                    <tr key={item.id}>
                        <td>{item.filterName}</td>

                    </tr>
                    ))
                }
            </tbody>
        </table>);
}
