import { Link } from 'react-router-dom';
import './Arrivage.css';
export default function NouvelAr(props) {
    return (
        <Link to={`/product/${props.info.id}`}>
            <div className="carda" id='carda'>
                <div className="flex flex-col justify-between card mr-0 w-24 p-2" >
                    <mark className='text-white   rounded-tl-lg rounded-tr-lg  rounded-bl-xl  pr-2 pl-2 pt-2 p-2'>Promo !</mark>
                    <div className='text-center'>
                        <img className="image" src={props.info.url} alt="product image" />
                        <h2>{props.info.name}</h2>

                        <p className="text-red-800"><span style={{ fontWeight: "750", fontSize: "15px" }}>{props.info.new_price}</span></p>

                        <p><span style={{ color: "#e74c3c", fontWeight: "450", textDecoration: "line-through", fontSize: "12px" }}>{props.info.old_price}</span></p>
                        <p>
                            {props.info.disponibility && props.info.disponibility === "IN STOCK" ? (
                                <span style={{ color: "green", fontSize: "13px",fontWeight : 600 }}>{props.info.disponibility}</span>
                            ) : (
                                <span style={{ color: "red", fontSize: "13px",fontWeight : 600 }}>{props.info.disponibility}</span>
                            )}
                        </p>
                        <p>
                            <button className='btnp'>
                                <span className='textp'>Ajouter au panier</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 iconp">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
