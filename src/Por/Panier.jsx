import React, { useReducer } from 'react';
import Imgpanier from '../Img/panier.png';
import './StylePanier.css';

const initialState = { nbr: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT": 
            return { ...state, nbr: state.nbr + 1 };
        case "DECREMENT": 
            // Ensure nbr doesn't go below 0
            return { ...state, nbr: Math.max(0, state.nbr - 1) };
        default:
            return state;
    }
}

export default function Panier() {
    const [state] = useReducer(reducer, initialState);

    return (
        <div>
            <div>
                <div id="Panier">Panier</div>
                <div id="vide">(vide)</div>
            </div>
            <img src={Imgpanier} id="ImgP" alt="" />
            <div id="id0">{state.nbr}</div>
        </div>
    );
}
