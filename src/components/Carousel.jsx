import React, { useState } from "react";
import "../styles/Carousel.css";
function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  let images = [
    {
      id: 1,
      src: "Images/tributePage2.PNG",
      title: "Tribute",
      link: "/Tribute-Page",
    },
    {
      id: 2,
      src: "Images/surveyImg.PNG",
      title: "Survey",
    },
    {
      id: 3,
      src: "Images/tecDocImg.PNG",
      title: "TecDoc",
    },
    {
      id: 4,
      src: "Images/safetyPlanImg2.PNG",
      title: "SafetyPlan",
    },
    {
      id: 5,
      src: "Images/landingPageImg.PNG",
      title: "LandingPage",
    },
  ];

  function nextImage() {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function prevImage() {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }

  return (
    <>
      <div id="carousel">
        <div className="items">
          <div className="item prev">
            <img
              src={
                currentImageIndex === 0
                  ? images[images.length - 1].src
                  : images[currentImageIndex - 1].src
              }
              alt="1"
            />
          </div>
          <div className="item active">
            <img src={images[currentImageIndex].src} alt="2" />
            <a href={images[currentImageIndex].link}></a>
            <p>{images[currentImageIndex].title}</p>
          </div>
          <div className="item next">
            <img
              src={
                currentImageIndex === 4
                  ? images[0].src
                  : images[currentImageIndex + 1].src
              }
              alt="3"    
            />
          </div>
          <div className="button-container">
            <button className="button" onClick={prevImage}></button>

            <button className="button" onClick={nextImage}></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
