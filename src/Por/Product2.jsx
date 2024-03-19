import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Info2 from "./proInfoContact";
import './Product2.css';
import { Link } from "react-router-dom";

export default function Product2(props) {
    const [data, setData] = useState([]);
    const  id2  = props.productID2;
    
    const fetchData = () => {
        fetch('http://localhost/phpscript/here2.php')
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

    const [here, setHere] = useState(true);

    const DescButton = styled.button`
        /* Add your button styles here */
            color: ${({ active }) => active ? '#3d3d3d' : '#c7c7c7'};
            opacity: 1;
            margin-left: ${({ active }) => active ? '450px' : '450px'};
            border-top-color: ${({ active }) => active ? '#c7c7c7' : 'transparent'};
            border-right-color: ${({ active }) => active ? '#c7c7c7' : 'transparent'};
            border-left-color: ${({ active }) => active ? '#c7c7c7' : 'transparent'};
            border-bottom: ${({ active }) => active ? 'none' : '1px solid #c7c7c7'};
            background-color: ${({ active }) => active ? '#fff' : 'transparent'};
            border: ${({ active }) => active ? '1px solid #c7c7c7' : 'none'};
            border-bottom: ${({ active }) => active ? 'none' : 'none'};
            border-top-left-radius: ${({ active }) => active ? '5px' : '0'};
            border-top-right-radius: ${({ active }) => active ? '5px' : '0'};
            padding: ${({ active }) => active ? '10px' : '0'};
            font-size: ${({ active }) => active ? '1.125rem' : '1.125rem'};
            line-height: ${({ active }) => active ? 'normal' : 'normal'};
            text-align: center;
            font-family: Roboto Condensed, sans-serif;
            font-weight: ${({ active }) => active ? '700' : '700'};
            letter-spacing: ${({ active }) => active ? '.02em' : '.02em'};
            transition: color 0.3s ease;
            cursor: pointer;
            &:hover {
                color: ${({ active }) => active ? 'none' : '#3d3d3d'};
            }

        `;

        const ShipButton = styled.button`
        color: ${({ active }) => active ? '#3d3d3d' : '#c7c7c7'};
        opacity: 1;
        margin-left: ${({ active }) => active ? '10px' : '10px'};
        border-top-color: ${({ active }) => active ? '#c7c7c7' : 'transparent'};
        border-right-color: ${({ active }) => active ? '#c7c7c7' : 'transparent'};
        border-left-color: ${({ active }) => active ? '#c7c7c7' : 'transparent'};
        border-bottom: ${({ active }) => active ? 'none' : '1px solid #c7c7c7'};
        background-color: ${({ active }) => active ? '#fff' : 'transparent'};
        border: ${({ active }) => active ? '1px solid #c7c7c7' : 'none'};
        border-bottom: ${({ active }) => active ? 'none' : 'none'};
        border-top-left-radius: ${({ active }) => active ? '5px' : '0'};
        border-top-right-radius: ${({ active }) => active ? '5px' : '0'};
        padding: ${({ active }) => active ? '10px' : '0'};
        font-size: ${({ active }) => active ? '1.125rem' : '1.125rem'};
        line-height: ${({ active }) => active ? 'normal' : 'normal'};
        text-align: center;
        font-family: Roboto Condensed, sans-serif;
        font-weight: ${({ active }) => active ? '700' : '700'};
        letter-spacing: ${({ active }) => active ? '.02em' : '.02em'};
        transition: color 0.3s ease;
        cursor: pointer;
        &:hover {
                color: ${({ active }) => active ? 'none' : '#3d3d3d'};
            }

        `;

    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleIncreaseQuantity = () => {
        setSelectedQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (selectedQuantity > 1) {
            setSelectedQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    function HandleDescription(e) {
        e.preventDefault();
        setHere(true);
    }

    function HandleShopping(e) {
        e.preventDefault();
        setHere(false);
    }

    return (
        <div>
            {data.map((product) => {
                if (parseInt(product.id) === parseInt(id2)) {
                    return (
                        <div key={product.id} id="proGround">
                            <div><img src={product.url} alt="" width="350px" /></div>
                            <div>
                                <p id="protitre">{product.name}</p>
                                <p id="proReference">Référence : {product.reference}</p>
                                <p id="proEtat">Etat : {product.etat}</p>
                                <p>
                                    {product.disponibility && product.disponibility === "IN STOCK" ? (
                                        <span id="proDisponibleX">{product.disponibility}</span>
                                    ) : (
                                        <span id="proDisponibleY">{product.disponibility}</span>
                                    )}
                                </p>
                                <div id="proCara">Caractéristique : </div>
                                <ul>
                                    <li id="proDesc">{product.designation}</li>
                                    <li id="proDesc">{product.garantie}</li>
                                    <li id="proDesc">{product.description1}</li>
                                    <li id="proDesc">{product.description2}</li>
                                    <li id="proDesc">{product.description3}</li>
                                </ul>
                                <div id="proBorder2">
                                    <span style={{ color: "#fd6282", fontSize: "28px", fontWeight: 700, lineHeight: "normal" }}>{product.new_price}</span>
                                    <span style={{ marginLeft: "30px", fontSize: "14px", fontStyle: "italic", color: "#5d5d5d", textDecoration: "line-through" }}>{product.old_price}</span><br />
                                    <span style={{ color: "#5d5d5d", fontStyle: "italic", fontSize: "11.5px" }}>TTC - ENTRE 1 à 4 Jours</span>
                                    <div className="flex mt-4">
                                        <div className="flex">
                                            <button id="proQuant" className="proButLeft" onClick={handleDecreaseQuantity}>-</button>
                                            <div id="proNuber">{selectedQuantity}</div>
                                            <button id="proQuant" className="proButRight" onClick={handleIncreaseQuantity}>+</button>
                                        </div>
                                        <div className="flex">
                                            {selectedQuantity <= product.quantite ? (
                                                <Link to={`/monpanier2/${product.id}`}><button>
                                                    <span id="pro1FaceBu"><i className="fa-solid fa-cart-shopping"></i> Ajouter au panier</span>
                                                </button></Link>
                                            ) : (
                                                <button disabled>
                                                    <span id="pro2FaceBu">Quantité indisponible</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div id="proBigDesc">
                                    <DescButton active={here} onClick={HandleDescription}>DESCRIPTION</DescButton>
                                    <ShipButton active={!here} onClick={HandleShopping}>SHIPPING & RETURNS</ShipButton>
                                    <div id="proAllDesc">
                                        {here ? (
                                            <div>
                                                <span style={{ fontSize: "18px", fontWeight: 700, color: "#3d3d3d", letterSpacing: ".02em" }}>{product.h1}</span><br />
                                                <span style={{ color: "#5d5d5d", fontSize: 13 }}>{product.h1Desc}</span><br /><br />
                                                <span style={{ fontSize: "18px", fontWeight: 700, color: "#3d3d3d", letterSpacing: ".02em" }}>{product.h2}</span><br />
                                                <span style={{ color: "#5d5d5d", fontSize: 13 }}>{product.h2Desc}</span>
                                                <div id="proCara">Caractéristique : </div>
                                                <ul>
                                                    <li id="proDesc">{product.designation}</li>
                                                    <li id="proDesc">{product.garantie}</li>
                                                    <li id="proDesc">{product.description1}</li>
                                                    <li id="proDesc">{product.description2}</li>
                                                    <li id="proDesc">{product.description3}</li>
                                                </ul>
                                            </div>
                                        ) : (
                                            <div>
                                                <span style={{ fontSize: "15px", fontWeight: 700, color: "#5d5d5d", letterSpacing: ".02em", lineHeight: "50px" }}>Politique De Retour:</span><br />
                                                <span style={{ color: "#5d5d5d", fontSize: 13 }}>{product.politique_retour}</span><br />
                                                <span style={{ fontSize: "15px", fontWeight: 700, color: "#5d5d5d", letterSpacing: ".02em", lineHeight: "50px" }}>Expédition:</span><br />
                                                <span style={{ color: "#5d5d5d", fontSize: 13 }}>{product.expedition}</span><br />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
            <div>
                <Info2 className="proChanged" />
            </div>
        </div>
    );
}
