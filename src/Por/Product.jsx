import arrivales_data from "./DATA";
import { useState } from "react";
import styled from "styled-components";
import Info2 from "./proInfoContact";
import './Product.css';
export default function Product(props){
        const productID = props.productID;
        const data= arrivales_data.find((ele)=> ele.id === parseInt(productID));
        const [here,setHere] = useState(true);
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
    const product = arrivales_data.find((ele) => ele.id === parseInt(productID));
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleIncreaseQuantity = () => {
        setSelectedQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (selectedQuantity > 1) {
            setSelectedQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    function HandleDescription(e){
        e.preventDefault();
        setHere(true);

    }
    function HandleShopping(e){
        e.preventDefault();
        setHere(false);
    }
    return(
        <div>
            <div id="proGround">
                <div><img src={data.url} alt=""width="350px"/></div>
                <div>
                    <p id="protitre">{data.name}</p>
                    <p id="proReference">Référence : {data.reference}</p>
                    <p id="proEtat">Etat : {data.etat}</p>
                    <p>
                    {data.disponibility && data.disponibility === "IN STOCK" ? (
                                <span id="proDisponibleX">{data.disponibility}</span>
                            ) : (
                                <span id="proDisponibleY">{data.disponibility}</span>
                            )}
                    </p>
                    <div id="proCara">Caractéristique : </div>
                    <ul>
                        <li id="proDesc">{data.designation}</li>
                        <li id="proDesc">{data.garantie}</li>
                        <li id="proDesc">{data.description1}</li>
                        <li id="proDesc">{data.description2}</li>
                        <li id="proDesc">{data.description3}</li>
                    </ul>
                    <div id="proBorder">
                        <span style={{color:"#fd6282",fontSize:"28px",fontWeight: 700,lineHeight: "normal"}}>{data.new_price}</span>
                        <span style={{marginLeft:"30px",fontSize:"14px",fontStyle: "italic",color:"#5d5d5d",textDecoration:"line-through"}}>{data.old_price}</span><br />
                        <span style={{color:"#5d5d5d",fontStyle: "italic",fontSize:"11.5px"}}>TTC - ENTRE 1 à 4 Jours</span>
                        <div className="flex mt-4"> 
                            <div className="flex">
                                <button id="proQuant" className="proButLeft" onClick={handleDecreaseQuantity}>-</button>
                                <div id="proNuber">{selectedQuantity}</div>
                                <button  id="proQuant" className="proButRight" onClick={handleIncreaseQuantity}>+</button>
                            </div>
                            <div className="flex">
                                {selectedQuantity <= product.quantite ? (
                                    <button>
                                        <span id="pro1FaceBu"><i class="fa-solid fa-cart-shopping"></i> Ajouter au panier</span>
                                    </button>
                                ) : (
                                    <button disabled>
                                        <span id="pro2FaceBu">Quantité indisponible</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <div id="proBigDesc">
                <DescButton active={here} onClick={HandleDescription}>DESCRIPTION</DescButton>
                <ShipButton active={!here} onClick={HandleShopping}>SHIPPING & RETURNS</ShipButton>
                <div id="proAllDesc">
                {
                    here ? <di>
                        <span style={{ fontSize: "18px", fontWeight: 700, color: "#3d3d3d", letterSpacing: ".02em"}}>{data.h1}</span><br />
                        <span style={{color:"#5d5d5d", fontSize:13}}>{data.h1Desc}</span><br /><br />
                        <span style={{fontSize:"18px", fontWeight: 700, color: "#3d3d3d", letterSpacing: ".02em" }}>{data.h2}</span><br />
                        <span style={{color:"#5d5d5d", fontSize:13}}>{data.h2Desc}</span>
                        <div id="proCara">Caractéristique : </div>
                        <ul>
                        <li id="proDesc">{data.designation}</li>
                        <li id="proDesc">{data.garantie}</li>
                        <li id="proDesc">{data.description1}</li>
                        <li id="proDesc">{data.description2}</li>
                        <li id="proDesc">{data.description3}</li>
                    </ul>
                    </di>
                    :   <div>
                            <span style={{ fontSize: "15px", fontWeight: 700, color: "#5d5d5d", letterSpacing: ".02em", lineHeight:"50px"}}>Politique De Retour:</span><br />
                            <span style={{color:"#5d5d5d", fontSize:13}}>{data.politique_retour}</span><br />
                            <span style={{ fontSize: "15px", fontWeight: 700, color: "#5d5d5d", letterSpacing: ".02em", lineHeight:"50px"}}>Expédition:</span><br />
                            <span style={{color:"#5d5d5d", fontSize:13}}>{data.expedition}</span><br />
                        </div>
                }
                </div>
            </div>
            <div>
            <Info2 className="proChanged"/>
            </div>
        </div>
    )
}