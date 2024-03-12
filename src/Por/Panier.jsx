import Imgpanier from '../Img/panier.png';
import React from 'react';
import './StylePanier.css';
export default function Panier() {
    return (
        <div>
            <div>
                <div id="Panier">Panier</div>
                <div id="vide">(vide)</div>
            </div>
            <img src={Imgpanier} id="ImgP" alt="" />
            <div id="id0">0</div>
        </div>
    );
}

export const initialState = { nbr: 0 };

export function TraitPanier(state = initialState, action) {
    switch (action.type) {
        case "Ajouter": 
            return { ...state, nbr: state.nbr + 1 };
        case "Supprimer": 
            // Assuming you want to reset the count to 0 when removingz
            return { ...state, nbr: state.nbr - 1  };
        default:
            return state;
    }
}
