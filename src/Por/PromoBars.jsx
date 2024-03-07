import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PromoBar from "./PromoBar";
import { data_product_promo, responsive } from "./PromoBar";
import './PromoBar.css'
export default function App() {
  const product = data_product_promo.map((item) => (
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
