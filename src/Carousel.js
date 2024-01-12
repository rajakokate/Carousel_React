// ShoppingCarousel.js
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ShoppingCarousel.css";

const ShoppingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 5000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const imageUrl1 =
    "https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/img/Tablet_275777.jpg";
  const imageUrl2 =
    "https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/img/CreditCard_277268.jpg";
  const imageUrl3 =
    "https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/img/Tablet_275777.jpg";

  const carouselItems = [
    { id: 1, imageUrl: imageUrl1, text: "Product 1 description " },
    { id: 2, imageUrl: imageUrl2, text: "Product 2 description" },
    { id: 3, imageUrl: imageUrl3, text: "Product 3 description" },
    // Add more items as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    afterChange: (current) => setCurrentIndex(current),
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="shopping-carousel-container">
      <Slider ref={sliderRef} {...settings} initialSlide={currentIndex}>
        {carouselItems.map((item) => (
          <div key={item.id} className="shopping-carousel-item">
            <img src={item.imageUrl} alt={item.text} />
            <div className="carousel-item-overlay">
              {/* Item text moved outside of the overlay */}
            </div>
            <div className="item-text">{item.text}</div>
            <div className="item-buttons">
              <button onClick={goToPrev}>&lt;</button>
              <button onClick={goToNext}>&gt;</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShoppingCarousel;
