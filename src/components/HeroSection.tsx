import MainCar from "../images/Hero/mainCar.png";
import Background from "../images/Hero/heroBack.png";
import "../styles/Hero/hero-style.css";

function HeroSection() {
  return (
    <>
      <section className="hero-block">
        <img
          className="hero-block__background"
          src={Background}
          alt="background"
        ></img>
        <div className="container">
          <div className="hero-block__content">
            <div className="hero-block__content-side1">
              <h1 className="hero-block__content-title">
                Welcome to{" "}
                <span className="strong">
                  Car<span className="strong blue">O</span>
                </span>
              </h1>
              <p className="hero-block__content-description">
                The go-to car rental service for all your transportation needs.
                Affordable prices, excellent customer service, and a wide
                selection of reliable vehicles to choose from. Book your rental
                today and experience convenience!
              </p>
              <a href="#book">
                <button className="hero-block__content-button">Book Ride! ✓</button>
              </a>
            </div>
            <div className="hero-block__content-side2">
              <img
                className="hero-block__content-image"
                src={MainCar}
                alt="hero car"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;