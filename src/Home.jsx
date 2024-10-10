import React from "react";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import image5 from "./assets/image5.jpg";
import image6 from "./assets/image6.jpg";
import image7 from "./assets/image7.jpg";

function Home() {
  return (
    <div className="container mt-5 slider">
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="500"
      >
        {" "}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={image4} className="d-block w-100" alt="Slide 4" />
          </div>
          <div className="carousel-item">
            <img src={image5} className="d-block w-100" alt="Slide 5" />
          </div>
          <div className="carousel-item">
            <img src={image6} className="d-block w-100" alt="Slide 6" />
          </div>
          <div className="carousel-item">
            <img src={image7} className="d-block w-100" alt="Slide 7" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
