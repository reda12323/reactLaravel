/*import { Link } from 'react-router-dom';
import './AfficherPanier.css';
import { useState, useEffect } from 'react';

export default function AfficherPanier(props) {
    const id2 = props.id2;
    const id1 = props.id1;
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const list1 = [];
    const list2 = [];
    const fetchData1 = () => {
        fetch('http://localhost/phpscript/here.php')
            .then(response => response.json())
            .then(data => {
                console.log('Received data 1:', data);
                setData1(data);
            })
            .catch(error => console.error('Error fetching data 1:', error));
    };

    const fetchData2 = () => {
        fetch('http://localhost/phpscript/here2.php')
            .then(response => response.json())
            .then(data => {
                console.log('Received data 2:', data);
                setData2(data);
            })
            .catch(error => console.error('Error fetching data 2:', error));
    };

    useEffect(() => {
        fetchData1();
        fetchData2();
    });
    return(
        <div className='mt-9 ml-14'>
           <div>
            {list1.map(product => {
                return(
                    <div>
                        <Link key={product.id} to={`/product1/${product.id}`}>
                            <div key={product.id} id='cadrePanier'>
                                <img src={product.url} alt="" id='cadrePanierImg'  />
                                <div>{product.name}</div>
                                <span className='text-red-800' style={{ fontWeight: "750", fontSize: "15px" }}>{product.new_price}</span> <br />
                                <span style={{ color: "#e74c3c", fontWeight: "450", textDecoration: "line-through", fontSize: "12px" }}>{product.old_price}</span><br />
                                <div id='cadrePanierPaiTwo'>
                                    <button id='cadrePanierPai'>Paiement</button>
                                    <button id='cadrePanierSupp'>Supprimer</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
           </div>
           <div>
           {list2.map(product => {
                return(
                    <div>
                        <Link key={product.id} to={`/product2/${product.id}`}>
                            <div key={product.id} id='cadrePanier'>
                                <img src={product.url} alt="" id='cadrePanierImg'  />
                                <div>{product.name}</div>
                                <span className='text-red-800' style={{ fontWeight: "750", fontSize: "15px" }}>{product.new_price}</span> <br />
                                <span style={{ color: "#e74c3c", fontWeight: "450", textDecoration: "line-through", fontSize: "12px" }}>{product.old_price}</span><br />
                                <div id='cadrePanierPaiTwo'>
                                    <button id='cadrePanierPai'>Paiement</button>
                                    <button id='cadrePanierSupp'>Supprimer</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
           </div>
           <div>
           {data1.map(product => {
                // Vérifiez si l'ID du produit correspond à id1 ou id2
                if (parseInt(product.id) === parseInt(id1) ) {
                    list1.push(product);
                    return (
                        <Link key={product.id} to={`/product1/${product.id}`}>
                            <div key={product.id} id='cadrePanier'>
                                <img src={product.url} alt="" id='cadrePanierImg'  />
                                <div>{product.name}</div>
                                <span className='text-red-800' style={{ fontWeight: "750", fontSize: "15px" }}>{product.new_price}</span> <br />
                                <span style={{ color: "#e74c3c", fontWeight: "450", textDecoration: "line-through", fontSize: "12px" }}>{product.old_price}</span><br />
                                <div id='cadrePanierPaiTwo'>
                                    <button id='cadrePanierPai'>Paiement</button>
                                    <button id='cadrePanierSupp'>Supprimer</button>
                                </div>
                            </div>
                        </Link>
                        
                    );
                }
                return null; // Retourne null pour les produits qui ne correspondent pas
                
            })}
            {data2.map(product => {
                // Vérifiez si l'ID du produit correspond à id1 ou id2
                if (parseInt(product.id) === parseInt(id2)) {
                    list2.push(product);
                    return (
                        <Link key={product.id} to={`/product2/${product.id}`}>
                            <div key={product.id} id='cadrePanier'>
                                <img src={product.url} alt="" id='cadrePanierImg'  />
                                <div>{product.name}</div>
                                <span className='text-red-800' style={{ fontWeight: "750", fontSize: "15px" }}>{product.new_price}</span> <br />
                                <span style={{ color: "#e74c3c", fontWeight: "450", textDecoration: "line-through", fontSize: "12px" }}>{product.old_price}</span><br />
                                <div id='cadrePanierPaiTwo'>
                                    <button id='cadrePanierPai'>Paiement</button>
                                    <button id='cadrePanierSupp'>Supprimer</button>
                                </div>
                            </div>
                        </Link>
                        
                    );
                }
                return null; // Retourne null pour les produits qui ne correspondent pas
            })}
           </div>
        </div>
    )
}*/

import { Link } from 'react-router-dom';
import './AfficherPanier.css';
import { useState, useEffect } from 'react';

export default function AfficherPanier(props) {
    const id2 = props.id2;
    const id1 = props.id1;
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [list1, setList1] = useState([]);
    const [list2, setList2] = useState([]);
    
    useEffect(() => {
        const fetchData1 = () => {
            fetch('http://localhost/phpscript/here.php')
                .then(response => response.json())
                .then(data => {
                    console.log('Received data 1:', data);
                    setData1(data);
                })
                .catch(error => console.error('Error fetching data 1:', error));
        };

        const fetchData2 = () => {
            fetch('http://localhost/phpscript/here2.php')
                .then(response => response.json())
                .then(data => {
                    console.log('Received data 2:', data);
                    setData2(data);
                })
                .catch(error => console.error('Error fetching data 2:', error));
        };

        fetchData1();
        fetchData2();
    }, []);

    useEffect(() => {
        const filteredList1 = data1.filter(product => parseInt(product.id) === parseInt(id1));
        const filteredList2 = data2.filter(product => parseInt(product.id) === parseInt(id2));
        setList1(filteredList1);
        setList2(filteredList2);
    }, [data1, data2, id1, id2]);
    

    return (
        <div className='mt-9 ml-14'>
            <div>
                {list1.map(product => (
                    <div key={product.id}>
                        <Link to={`/product1/${product.id}`}>
                            <div id='cadrePanier'>
                                <img src={product.url} alt="" id='cadrePanierImg' />
                                <div>{product.name}</div>
                                <span className='text-red-800' style={{ fontWeight: "750", fontSize: "15px" }}>{product.new_price}</span> <br />
                                <span style={{ color: "#e74c3c", fontWeight: "450", textDecoration: "line-through", fontSize: "12px" }}>{product.old_price}</span><br />
                                <div id='cadrePanierPaiTwo'>
                                    <button id='cadrePanierPai'>Paiement</button>
                                    <button id='cadrePanierSupp'>Supprimer</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div>
                {list2.map(product => (
                    <div key={product.id}>
                        <Link to={`/product2/${product.id}`}>
                            <div id='cadrePanier'>
                                <img src={product.url} alt="" id='cadrePanierImg' />
                                <div>{product.name}</div>
                                <span className='text-red-800' style={{ fontWeight: "750", fontSize: "15px" }}>{product.new_price}</span> <br />
                                <span style={{ color: "#e74c3c", fontWeight: "450", textDecoration: "line-through", fontSize: "12px" }}>{product.old_price}</span><br />
                                <div id='cadrePanierPaiTwo'>
                                    <button id='cadrePanierPai'>Paiement</button>
                                    <button id='cadrePanierSupp'>Supprimer</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
