import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PromoBar from "./PromoBar";
import React, { useEffect, useState } from 'react';
import { responsive } from "./PromoBar";
import './PromoBar.css'
export default function App() {
  const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('http://localhost/phpscript/here.php')
            .then(response => response.json())
            .then(data => {
                console.log('Received data:', data);
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    };
  const product = data.map((item) => (
    <PromoBar style={{marginTop:"80px"}}
      name={item.name}
      url={item.url}
      new_price={item.new_price} // Assuming 'price' is the correct property for the new price
      old_price={item.old_price}
      disponibility={item.disponibility}
    />
  ));

  return (
    <div className="container mx-auto p-4 pt-20" id="promoborder">
      <p id="MegaP">MEGA PROMO</p>
      <div>
      <Carousel autoPlay={true} autoPlaySpeed={1500} infinite={true}  responsive={responsive} >
        {product}
      </Carousel>
      </div>
    </div>
  );
}
