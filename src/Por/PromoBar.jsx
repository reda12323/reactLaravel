import React from 'react';
import './Promo.css'
import { Link } from 'react-router-dom';

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function PromoBar({ id,url, name, new_price, old_price, disponibility }) {
  return (
    <Link to={`/product/${id}`}>
      <div className="card mr-0 w-3/4 p-2" id='card'>
        <mark className='text-white   rounded-tl-lg rounded-tr-lg  rounded-bl-xl  pr-2 pl-2 pt-2 p-2'>Promo !</mark>
        <div className='text-center'>
          <img className="" src={url} alt={name} />
          <h2>{name}</h2>
          
          <p className="text-red-800"><span style={{fontWeight:"750",fontSize:"15px"}}>{new_price}</span></p>
          
          <p><span style={{color:"#e74c3c",fontWeight:"450",textDecoration:"line-through",fontSize:"12px"}}>{old_price}</span></p>
          <p>
            {disponibility  && disponibility === "IN STOCK" ? (
              <span style={{ color: "green", fontSize: "13px", fontWeight: 600 }}>{disponibility}</span>
            ) : (
              <span style={{ color: "red", fontSize: "13px", fontWeight: 600 }}>{disponibility}</span>
            )}
          </p>
          <p>
            <button className='btn'>
              <span className='text'>Lire la suite</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
              </svg>
            </button>
          </p>
        </div>
      </div>
    </Link>
  );
}
