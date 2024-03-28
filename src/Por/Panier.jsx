import React from 'react';
import Imgpanier from '../Img/panier.png';
import './StylePanier.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Panier() {
    const [panier, setPanier] = useState([]);
    const fetchData = () => {
        fetch('http://localhost/phpscript/panierAf.php')
              .then(response => response.json())
              .then(data => {
                  console.log('Received data:', data);
                  setPanier(data);
              })
              .catch(error => console.error('Error fetching data:', error));
      };
      useEffect(() => {
          fetchData();
      }, [panier]);

    return (
        <div>
            <div>
                <div id="Panier">Panier</div>
                {panier.length > 0 ? null : <div id="vide">(vide)</div>}
            </div>
            <Link to="/monpanier">
                <img src={Imgpanier} id="ImgP" alt="" />
                <div id="id0">{panier.length > 0 ? panier.length : 0}</div>
            </Link>
        </div>
    );
}
