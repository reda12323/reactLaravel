import React, { useState } from "react";
import SearchResultsListe from './SearchResultsListe';
import Imgpanier from '../Img/panier.png';
import './Style.css';
export default function Accueil(props) {
    const [search,setSearch] = useState("");
    
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
    return (
        <div className="min-h-screen">
            <nav className="bg-gray-200 shadow-lg ">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center py-2.5">
                        <ul className="flex space-x-6 items-center justify-end"> {/* Add justify-end class here */}
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-red-800">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <div className=" text-red-800 hover:text-white">Phone :</div>
                                <div className="text-gray-400"> 05 785 235 257</div>
                            </li>
                            <li className="flex items-center">
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
                            <li className="flex items-strat pl-96 "> {/* No need for ml-auto here */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-red-800">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <button className="text-gray-400  hover:text-white">My account</button> {/* Added text color classes */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="flex items-start">
                <img className="w-48 h-50 mx-44 mb-24" src="https://africagaming.ma/wp-content/uploads/2023/10/africa_gaming11.png" alt="" loading="eager" style={{ marginTop: '20px' }} />
                <div className="flex flex-col" id="input-wrapper">
                    <form className="flex items-center" id="Two">
                        <input type="text" className="m-auto" value={search} placeholder="Type to search ..." onChange={(e) => HandleChange(e.currentTarget.value)} style={{ marginTop: '20px' }} />
                        <button id="button-search" className="flex items-cente mx-3" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" id="new-icon" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        </button>
                        <div>
                            <div id="Panier">Panier</div>
                            <div id="vide">(vide)</div>
                        </div>
                            <img src={Imgpanier} id="ImgP" alt=""/>
                            <div className="nav-cart-count">0</div>
                        
                    </form>
                    <SearchResultsListe className="my-2" id="SearchRL" results={props.results} />
                    
                </div>
            </nav>
        </div>
    );
}