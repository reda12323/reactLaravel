import SearchResultsListe from './SearchResultsListe';
import React, { useState } from "react";
import Panier from "./Panier";
import axios from 'axios';
import './Admin.css'
import { Link } from 'react-router-dom';
export default function PageAdmin(props){
    const [search, setSearch] = useState("");
    const [id, setId] = useState("");
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [new_price, setNewPrice] = useState('');
    const [old_price, setOldPrice] = useState('');
    const [disponibility, setDisponibility] = useState('');
    const [garantie, setGarantie] = useState('');
    const [etat, setEtat] = useState('');
    const [reference, setReference] = useState('');
    const [designation, setDesignation] = useState('');
    const [model, setModel] = useState('');
    const [description1, setDescription1] = useState('');
    const [description2, setDescription2] = useState('');
    const [description3, setDescription3] = useState('');
    const [h1Desc1, setH1Desc1] = useState('');
    const [h1Desc2, setH1Desc2] = useState('');
    const [h1, setH1] = useState('');
    const [h2, setH2] = useState('');
    const [define, setDefine] = useState('');
    const [quantite, setQuantite] = useState('');
    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then(json => {
            const results = json.filter((user) => {
                return value && user && user.name && user.name.toLowerCase().includes(value)
            });
            props.setResults(results);
        })
    };
    const HandleChange = (value) => {
        setSearch(value);
        fetchData(value);
    }
    const HandleAdmin = (e) => {
        e.preventDefault();
        const lien = "http://localhost/phpscript/AddProduct.php";
        let pData = new FormData();
        pData.append('image', image);
        pData.append('name', name);
        pData.append('new_price', new_price);
        pData.append('old_price', old_price);
        pData.append('disponibility', disponibility);
        pData.append('garantie', garantie);
        pData.append('etat', etat);
        pData.append('reference', reference);
        pData.append('designation', designation);
        pData.append('model', model);
        pData.append('description1', description1);
        pData.append('description2', description2);
        pData.append('description3', description3);
        pData.append('h1Desc1', h1Desc1);
        pData.append('h1Desc2', h1Desc2);
        pData.append('h1', h1);
        pData.append('h2', h2);
        pData.append('define', define);
        pData.append('quantite', quantite);
        
        axios.post(lien, pData)
            .then(response => {
                alert(response.data);
                // Clear input fields after successful submission
                setName("");
                setNewPrice("");
                setOldPrice("");
                setDisponibility("");
                setGarantie("");
                setEtat("");
                setReference("");
                setDesignation("");
                setModel("");
                setDescription1("");
                setDescription2("");
                setDescription3("");
                setH1Desc1("");
                setH1Desc2("");
                setH1("");
                setH2("");
                setDefine("");
                setQuantite("");
            })
            .catch(error => alert(error));
    }
    
    const HandleAdminSupp = (e) => {
        e.preventDefault();
        const lien = "http://localhost/phpscript/SuppAdmin.php";
        let sData = new FormData();
        sData.append('id',id);
        axios.post(lien, sData)
        .then(response=> {
            alert(response.data)
            setId("");
        })
        .catch(error => alert(error));
    }
    const HandleAdminModify = (e) => {
        e.preventDefault();
        alert('success');
    }
    return(
        <div>
            <nav className="bg-gray-200 shadow-lg ">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center py-2.5">
                        <ul className="flex flex-wrap space-x-6  items-center justify-start"> {/* Add justify-end class here */}
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-red-800">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <div className=" text-red-800 hover:text-white">Phone :</div>
                                <div className="text-gray-400"> 05 785 235 257</div>
                            </li>
                            <li className="flex items-center  ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-red-800">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <div className=" text-red-800 hover:text-white">Phone :</div>
                                <div className="text-gray-400"> 05 785 235 258</div>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-800">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                </svg>
                                <div className="text-red-800">Email : </div>
                                <div className="text-gray-400"> redalextayzi@gmail.com </div>
                            </li>
                            <Link to="/account"><li className=" flex items-center pl-[230px]"> {/* No need for ml-auto here */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-7 text-red-800">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <button className="text-gray-400  hover:text-white">My account</button> {/* Added text color classes */}
                            </li></Link>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="flex items-start">
                <Link to="/"><img className="w-48 h-50 mx-44 mb-24 ml-24" src="https://africagaming.ma/wp-content/uploads/2023/10/africa_gaming11.png" alt="" loading="eager" style={{ marginTop: '20px' }} /></Link>
                <div className="flex flex-col" id="input-wrapper">
                    <form className="flex items-center" id="Two">
                        <input type="text" id="SearshInput" className="m-auto" value={search} placeholder="Type to search ..." onChange={(e) => HandleChange(e.currentTarget.value)} style={{ color:'black', marginTop: '33px' }} />
                        <button id="button-search" className="flex items-cente mx-3" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" id="new-icon" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        </button>
                        <Panier/>
                        
                    </form>
                    <SearchResultsListe className="my-2" id="SearchRL" results={props.results} />
                </div>
            </nav>
            <nav className=''>
                <h1 className='text-4xl'>Ajouter un Produit : </h1>
                <div >
                    <form id='Adminformule' onSubmit={e => e.preventDefault()}  className='flex space-x-8 justify-center items-center' >
                        <div id='TwoAdmin'  style={{float:"right"}}>
                            <div>
                                <label style={{textAlign:"justify"}}>Image</label><br /> 
                                <input type="text" name="url" id="url" value={image} onChange={(e) => setImage(e.target.value)} />
                            </div>
                            <div>
                                Name :<br />  
                                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                New_price :<br />  
                                <input type="text" name="new_price" id="new_price" value={new_price} onChange={(e) => setNewPrice(e.target.value)}/>
                            </div>
                            <div>
                                Old_price :<br />  
                                <input type="text" name="old_price" id="old_price" value={old_price} onChange={(e) => setOldPrice(e.target.value)} />
                            </div>
                            <div>
                                Disponibility :<br />  
                                <input type="text" name="disponibility" id="disponibility" value={disponibility} onChange={(e) => setDisponibility(e.target.value)} />
                            </div>
                            <div>
                                Garantie :<br />  
                                <input type="text" name="garantie" id="garantie" value={garantie} onChange={(e) => setGarantie(e.target.value)}/>
                            </div>
                            <div>
                                Etat :<br /> 
                                <input type="text" name="etat" id="etat" value={etat} onChange={(e) => setEtat(e.target.value)}/>
                            </div>
                            <div>
                                Reference :<br />  
                                <input type="text" name="reference" id="reference" value={reference} onChange={(e) => setReference(e.target.value)}/>
                            </div>
                            <div>
                                Designation :<br />  
                                <input type="text" name="designation" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)}/>
                            </div>
                            <div>
                                Model :<br />  
                                <input type="text" name="model" id="model" value={model} onChange={(e) => setModel(e.target.value)}/>
                            </div>
                        </div>
                        <div id='TwoAdmin'>
                            <div>
                                Description1 :<br />  
                                <input type="text" name="description1" id="description1" value={description1} onChange={(e) => setDescription1(e.target.value)}/>
                            </div>
                            <div>
                                Description2 :<br /> 
                                <input type="text" name="description2" id="description2" value={description2} onChange={(e) => setDescription2(e.target.value)}/>
                            </div>
                            <div>
                                Description3 :<br />  
                                <input type="text" name="description3" id="description3" value={description3} onChange={(e) => setDescription3(e.target.value)}/>
                            </div>
                            <div>
                                h1Desc1 :<br />  
                                <textarea  name="h1Desc1" id="h1Desc1" value={h1Desc1} onChange={(e) => setH1Desc1(e.target.value)}/>
                            </div>
                            <div>
                                h1Desc2 :<br />  
                                <textarea  name="h1Desc2" id="h1Desc2" value={h1Desc2} onChange={(e) => setH1Desc2(e.target.value)}/>
                            </div>
                            <div>
                                Quantité :<br />  
                                <input type="text" name="quantite" id="quantite" value={quantite} onChange={(e) => setQuantite(e.target.value)}/>
                            </div>
                            <div>
                                h1 :<br />  
                                <input type="text" name="h1" id="h1" value={h1} onChange={(e) => setH1(e.target.value)}/>
                            </div>
                            <div>
                                h2 :<br />  
                                <input type="text" name="h2" id="h2" value={h2} onChange={(e) => setH2(e.target.value)}/>
                            </div>
                            <div>
                                Define :<br />  
                                <input type="text" placeholder='pc ou clavier ou souris ....' name="define" id="define" value={define} onChange={(e) => setDefine(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <input type="button" name="" id="button" onClick={HandleAdmin} value="Ajouter"/>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
            <nav className=''>
            <h1 className='text-4xl'>Supprimer un Produit : </h1>
                <div>
                    <form id='AdminformuleSupp' className='flex mt-11 space-x-8 justify-center items-center'>
                        <div>
                            ID : <br />
                            <input type="text" name="id" id="id" value={id} onChange={(e) => setId(e.target.value)} />
                        </div>
                        <div>
                               <br /> <input type="button" name="" id="button" onClick={HandleAdminSupp} value="Supprimer"/>
                        </div>
                    </form>
                </div>
            </nav>
            <nav className=''>
                <h1 className='text-4xl'>Modifier un Produit : </h1>
                <div >
                    <form id='AdminformuleModify' onSubmit={e => e.preventDefault()}  className='flex  space-x-8 justify-center items-center' >
                        <div id='TwoAdmin'  style={{float:"right"}}>
                            <div>
                                <label style={{textAlign:"justify"}}>Image</label><br /> 
                                <input type="text" name="url" id="url" value={image} onChange={(e) => setImage(e.target.value)} />
                            </div>
                            <div>
                                Name :<br />  
                                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                New_price :<br />  
                                <input type="text" name="new_price" id="new_price" value={new_price} onChange={(e) => setNewPrice(e.target.value)}/>
                            </div>
                            <div>
                                Old_price :<br />  
                                <input type="text" name="old_price" id="old_price" value={old_price} onChange={(e) => setOldPrice(e.target.value)} />
                            </div>
                            <div>
                                Disponibility :<br />  
                                <input type="text" name="disponibility" id="disponibility" value={disponibility} onChange={(e) => setDisponibility(e.target.value)} />
                            </div>
                            <div>
                                Garantie :<br />  
                                <input type="text" name="garantie" id="garantie" value={garantie} onChange={(e) => setGarantie(e.target.value)}/>
                            </div>
                            <div>
                                Etat :<br /> 
                                <input type="text" name="etat" id="etat" value={etat} onChange={(e) => setEtat(e.target.value)}/>
                            </div>
                            <div>
                                Reference :<br />  
                                <input type="text" name="reference" id="reference" value={reference} onChange={(e) => setReference(e.target.value)}/>
                            </div>
                            <div>
                                Designation :<br />  
                                <input type="text" name="designation" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)}/>
                            </div>
                            <div>
                                Model :<br />  
                                <input type="text" name="model" id="model" value={model} onChange={(e) => setModel(e.target.value)}/>
                            </div>
                        </div>
                        <div id='TwoAdmin'>
                            <div>
                                Description1 :<br />  
                                <input type="text" name="description1" id="description1" value={description1} onChange={(e) => setDescription1(e.target.value)}/>
                            </div>
                            <div>
                                Description2 :<br /> 
                                <input type="text" name="description2" id="description2" value={description2} onChange={(e) => setDescription2(e.target.value)}/>
                            </div>
                            <div>
                                Description3 :<br />  
                                <input type="text" name="description3" id="description3" value={description3} onChange={(e) => setDescription3(e.target.value)}/>
                            </div>
                            <div>
                                h1Desc1 :<br />  
                                <textarea  name="h1Desc1" id="h1Desc1" value={h1Desc1} onChange={(e) => setH1Desc1(e.target.value)}/>
                            </div>
                            <div>
                                h1Desc2 :<br />  
                                <textarea  name="h1Desc2" id="h1Desc2" value={h1Desc2} onChange={(e) => setH1Desc2(e.target.value)}/>
                            </div>
                            <div>
                                Quantité :<br />  
                                <input type="text" name="quantite" id="quantite" value={quantite} onChange={(e) => setQuantite(e.target.value)}/>
                            </div>
                            <div>
                                h1 :<br />  
                                <input type="text" name="h1" id="h1" value={h1} onChange={(e) => setH1(e.target.value)}/>
                            </div>
                            <div>
                                h2 :<br />  
                                <input type="text" name="h2" id="h2" value={h2} onChange={(e) => setH2(e.target.value)}/>
                            </div>
                            <div>
                                Define :<br />  
                                <input type="text" placeholder='pc ou clavier ou souris ....' name="define" id="define" value={define} onChange={(e) => setDefine(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <input type="button" name="" id="button" onClick={HandleAdminModify} value="Modifier"/>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    )
}