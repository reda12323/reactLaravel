import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Logo from "./BrandLogo";
import './Logos.css';
export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 6,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export default function Logos() {
  const data_logo = [
    { url: "https://pcstore.ma/wp-content/uploads/2019/07/image-produit-v7.jpg" },
    { url: "https://pcstore.ma/wp-content/uploads/2019/07/image-produit-v9.jpg" },
    { url: "https://pcstore.ma/wp-content/uploads/2019/07/image-produit-v8.jpg" },
    { url: "https://pcstore.ma/wp-content/uploads/2019/07/image-produit-v6.jpg" },
    { url: "https://pcstore.ma/wp-content/uploads/2019/07/image-produit-v5.jpg" },
    { url: "https://pcstore.ma/wp-content/uploads/2019/07/image-produit-v4.jpg" },
    { url: "https://pcstore.ma/wp-content/uploads/2019/07/image-produit-v3.jpg" },
    { url: "https://pcstore.ma/wp-content/uploads/2019/07/image-produit-v2.jpg" }
  ];

  const Logoss = data_logo.map((item, index) => (
    <Logo  style={{marginTop:"80px"}} key={index} logo={item.url} />
  ));

  return (
    <div>
        <p className="ml-[130px] mt-32 text-lg font-semibold uppercase">BRAND LOGOS</p>
        <div className="container">
        <Carousel
          autoPlay={true}
          autoPlaySpeed={6000}
          infinite={true}
          responsive={responsive}
        >
          {Logoss}
        </Carousel>
      </div>
    </div>
  );
}
