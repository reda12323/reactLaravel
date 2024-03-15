import ImageSlider from './ImageSlider';
const ImagesSliders = () => {
    const slides = [
        { url: "http://localhost:3000/image-1.jpeg", title: "beach" },
        { url: "http://localhost:3000/image-2.jpeg", title: "boat" },
        { url: "http://localhost:3000/image-3.jpeg", title: "forest" },
        { url: "http://localhost:3000/image-4.jpeg", title: "city" },
        { url: "http://localhost:3000/image-5.jpeg", title: "italy" },
    ];
    
    const containerStyles = {
      width: "935px",
      height: "430px",
      margin: "0 auto",
      marginTop: "15px",
      marginRight: "10px",
    };
  
    return (
      <div>
        <div style={containerStyles}>
          <ImageSlider slides={slides} parentWidth={1065} />
        </div>
      </div>
    );
  };
  
  export default ImagesSliders;
  