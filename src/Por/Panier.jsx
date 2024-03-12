import Imgpanier from '../Img/panier.png';
import React from 'react';
export default function Panier(){
    return(
        <div>
                        <div>
                            <div id="Panier">Panier</div>
                            <div id="vide">(vide)</div>
                        </div>
                            <img src={Imgpanier} id="ImgP" alt=""/>
                            <div className="nav-cart-count">0</div>
                        
        </div>
    )
}