import React from 'react';
import './Promo.css'
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
  export const data_product_promo = [
    { id: 1, url: "http://localhost:3000/pc1.jpeg", name: "PC Gamer  Core i7 11400F/512GB SSD/16GB/RTX4070", new_price: "8 999,00 DH ", old_price: "10 000,00 DH", disponibility: "IN STOCK" },
    { id: 2, url: "http://localhost:3000/pc2.jpeg", name: "PC Gamer  Core i5 11600K/1TB SSD/32GB/RTX3060", new_price: "7 500,00 DH ", old_price: "8 500,00 DH", disponibility: "IN STOCK" },
    { id: 3, url: "http://localhost:3000/pc3.jpeg", name: "PC Gamer  i9 11900K/2TB SSD/64GB/RTX3080", new_price: "12 000,00 DH ", old_price: "13 000,00 DH", disponibility: "IN STOCK" },
    { id: 4, url: "http://localhost:3000/pc4.jpeg", name: "PC Gamer  i9 12900K/4TB SSD/128GB/RTX3090", new_price: "18 000,00 DH ", old_price: "20 000,00 DH", disponibility: "OUT OF STOCK" },
    { id: 5, url: "http://localhost:3000/pc5.jpeg", name: "PC Gamer  Ryzen 9 5900X/2TB SSD/64GB/RX6800XT", new_price: "15 000,00 DH ", old_price: "16 000,00 DH", disponibility: "IN STOCK" },
    { id: 6, url: "http://localhost:3000/pc6.jpeg", name: "PC Gamer  Ryzen 7 5800X/1TB SSD/32GB/RX6700XT", new_price: "10 000,00 DH ", old_price: "11 000,00 DH", disponibility: "IN STOCK" },
    { id: 7, url: "http://localhost:3000/pc7.jpeg", name: "PC Gamer  Ryzen 5 5600X/512GB SSD/16GB/RX6600", new_price: "8 000,00 DH ", old_price: "9 000,00 DH", disponibility: "IN STOCK" },
    { id: 8, url: "http://localhost:3000/pc8.jpeg", name: "PC Gamer  Ryzen 3 5300G/256GB SSD/8GB/RX6500", new_price: "5 000,00 DH ", old_price: "6 000,00 DH", disponibility: "IN STOCK" },
  ];
  

  export default function PromoBar({ url, name, new_price, old_price,disponibility }) {
    return (
      <div className="card mr-0 w-3/4 p-2" id='card'>
        <mark className='text-white   rounded-tl-lg rounded-tr-lg  rounded-bl-xl  pr-2 pl-2 pt-2 p-2'>Promo !</mark>
        <div className='text-center'>
          <img className="" src={url} alt="product image" />
          <h2>{name}</h2>
          
            <p className="text-red-800"><span style={{fontWeight:"750",fontSize:"15px"}}>{new_price}</span></p>
          
          <p><span style={{color:"#e74c3c",fontWeight:"450",textDecoration:"line-through",fontSize:"12px"}}>{old_price}</span></p>
          <p>
              {disponibility  && disponibility === "IN STOCK" ? (
                <span style={{ color: "green", fontSize:"13.5px" }}>{disponibility}</span>
              ) : (
                <span style={{ color: "red", fontSize:"13.5px"  }}>{disponibility}</span>
              )}
          </p>
          <p>
            <button className='btn'>
              <span className='text'>Ajouter au panier</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
              </svg>
            </button>
        </p>
        </div>
      </div>
    );
  }
  