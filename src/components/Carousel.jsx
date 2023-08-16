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
      link: "/Survey",
    },
    {
      id: 3,
      src: "Images/tecDocImg.PNG",
      title: "TecDoc",
      link: "/Technial-Doc",
    },
    {
      id: 4,
      src: "Images/safetyPlanImg2.PNG",
      title: "SafetyPlan",
      link: "/Safety-Plan",
    },
    {
      id: 5,
      src: "Images/landingPageImg.PNG",
      title: "LandingPage",
      link: "Product-Landing-Page",
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
        <div className="item prev" onClick={prevImage}>
          <img
            src={
              currentImageIndex === 0
                ? images[images.length - 1].src
                : images[currentImageIndex - 1].src
            }
            alt="1" 
          />
          <p>
            {currentImageIndex === 0
              ? images[images.length - 1].title
              : images[currentImageIndex - 1].title}
          </p>
        </div>
        <div className="item active">
          <a href={images[currentImageIndex].link}>
            <img src={images[currentImageIndex].src} alt="2" />
            <p>{images[currentImageIndex].title}</p>
          </a>
        </div>
        <div className="item next" onClick={nextImage}>
          <img
            src={
              currentImageIndex === 4
                ? images[0].src
                : images[currentImageIndex + 1].src
            }
            alt="3"
          />
          <p>
            {currentImageIndex === 4
              ? images[0].title
              : images[currentImageIndex + 1].title}
          </p>
        </div>
        {/* <div className="button-container">
          <button className="button" ></button>

          <button className="button" ></button>
        </div> */}
      </div>
    </>
  );
}

export default Carousel;
