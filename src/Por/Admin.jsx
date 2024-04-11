import SearchResultsListe from './SearchResultsListe';
import React, { useState, useEffect } from "react";
import Panier from "./Panier";
import axios from 'axios';
import './Admin.css'
import { Link } from 'react-router-dom';
export default function PageAdmin(props){
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [id , setId] = useState("");
    const fetchData = () => {
        fetch('http://localhost/phpscript/here.php')
            .then(response => response.json())
            .then(data => {
                console.log('Received data:', data);
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    };
    useEffect(() => {
        fetchData();
    }, [data]);

    const fetchSata = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then(json => {
            const results = json.filter((user) => {
                return value && user && user.name && user.name.toLowerCase().includes(value)
            });
            props.setResults(results);
        })
    };
    const HandleChange = (value) => {
        setSearch(value);
        fetchSata(value);
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
    
    return(
        <div className=' h-screen'>
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
                            <Link to="/account"><li className=" absolute right-5 top-0"> {/* No need for ml-auto here */}
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
            <nav >
                <div className='p-5 overflow-auto rounded-lg shadow hidden md:block'>
                    <table className='w-full' border="1" id='AdminTable'>
                        <thead className='bg-gray-50 border-b-2 border-grey-200'>
                            <tr>
                                <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>Id</th>
                                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Name</th>
                                <th className='w-32 p-3 text-sm font-semibold tracking-wide text-left'>Prix</th>
                                <th className='w-24 p-3 text-sm font-semibold tracking-wide text-left'>Quantié</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-100'>
                            {data.map((show,index) => {
                                return(
                                    <tr className='bg-gray-50' key={index}>
                                        <td className='font-bold text-blue-500 hover:underline'>{show.id}</td>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{show.name}</td>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{show.new_price}</td>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{show.quantite}</td>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'><span className='p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-lg bg-opacity-50'>Modifier</span></td>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'><span className='p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50'>Ajouter</span></td>
                                        <td className='p-3 text-sm text-gray-700 whitespace-nowrap'><span className='p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50' onClick={(e) => { setId(show.id); HandleAdminSupp(e); }}>Supprimer</span></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    
                    {data.map((show, index) => {
                        return (
                            <div className='bg-white space-y-3 p-4 rounded-lg shadow' key={index}>
                                <div className='flex items-center space-x-2 text-sm overflow-hidden'>
                                    <div className='font-bold text-blue-500 hover:underline'>{show.id}</div>
                                    <div className='text-sm text-gray-700 whitespace-nowrap overflow-hidden'>{show.name}</div>
                                    <div className='text-sm font-medium text-black'>{show.new_price}</div>
                                    <div className='text-sm font-medium text-black'>{show.quantite}</div>
                                    <div><span className='p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-lg bg-opacity-50'>Modifier</span></div>
                                    <div><span className='p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50'>Ajouter</span></div>
                                    <div><span className='p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50'>Supprimer</span></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </nav>
        </div>
    )
}