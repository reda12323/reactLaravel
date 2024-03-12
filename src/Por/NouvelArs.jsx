import NouvelAr from "./NouvelAr";
import './Arrivages.css';
import React, { useEffect, useState } from 'react';

export default function NouvelArs() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch('http://localhost/phpscript/here.php')
            .then(response => response.json())
            .then(data => {
                console.log('Received data:', data);
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    };
    useEffect(() => {
        fetchData();
    }, []);
    return(
        <div className='Collections'>
            <div className="container mx-auto p-4 pt-20" >
                <h1 id="Arriv">NOUVEL ARRIVAGE</h1>
            </div>
            <div className="Collections-item">
                {data.map((ele) => (
                    <div  className="Collections-product" key={ele.id}><NouvelAr info={ele} /></div>
                ))}
            </div>
        </div>
    )
}
