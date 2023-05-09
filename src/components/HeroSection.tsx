import mainCar from "../images/Hero/mainCar.png";

function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <div className="hero__side1">
              <h1 className="hero__title">
                Welcome to{" "}
                <span className="strong">
                  Car<span className="strong blue">O</span>
                </span>
              </h1>
              <p className="hero__description">
                The go-to car rental service for all your transportation needs.
                Affordable prices, excellent customer service, and a wide
                selection of reliable vehicles to choose from. Book your rental
                today and experience convenience!
              </p>
              <a href="#book">
                <button className="hero__button">Book Ride! ✓</button>
              </a>
            </div>
            <div className="hero__side2">
              <img className="hero__image" src={mainCar} alt="mainCar" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
