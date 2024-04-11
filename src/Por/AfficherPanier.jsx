import { Link } from 'react-router-dom';
import './AfficherPanier.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function AfficherPanier() {
    const [data, setData] = useState([]);
    const fetchData = () => {
        fetch('http://localhost/phpscript/panierAf.php')
            .then(response => response.json())
            .then(data => {
                console.log('Received data:', data);
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    };
    useEffect(() => {
        fetchData();
    }, [data]); // Run whenever data changes
    const handleDelete = (id) => {
        const selectedProduct = data.find(product => parseInt(product.id) === parseInt(id));
        if (selectedProduct) {
            const formData = new FormData();
            formData.append('id', selectedProduct.id); // Assuming the server expects 'id' for deletion
    
            const url = "http://localhost/phpscript/panierSup.php";
            axios.post(url, formData)
                .then(response => {
                    // Upon successful deletion, update the state to reflect the changes
                    const updatedData = data.filter(product => product.id !== selectedProduct.id);
                    setData(updatedData);
                    //alert(response.data);
                })
                .catch(error => alert(error));
        }
    };
    return (
        <div className='mt-9 ml-14'>
            <div className='flex'>
                {data.length > 0 && data.map(product => (
                    <div key={product.id}>
                        <div key={product.id} id='cadrePanier'>
                            <Link to={`/product2/${product.id}`}><img src={product.url} alt="" id='cadrePanierImg' /></Link>
                            <div>{product.name}</div>
                            <span className='text-red-800' style={{ fontWeight: "750", fontSize: "15px" }}>{product.new_price}</span> <br />
                            <span style={{ color: "#e74c3c", fontWeight: "450", textDecoration: "line-through", fontSize: "12px" }}>{product.old_price}</span><br />
                            <div id='cadrePanierPaiTwo'>
                                <button id='cadrePanierPai'>Paiement</button>
                                <button id='cadrePanierSupp' onClick={() => handleDelete(product.id)}>Supprimer</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

