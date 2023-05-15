import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faEuroSign, faBan } from "@fortawesome/free-solid-svg-icons";
import WhyUsBC from "../images/WhyUs/WhyUsBC.png";
import "../styles/WhyUs/why-us-style.css";

function WhyUs() {
  return (
    <>
      <section className="why-us">
        <div className="container">

          <div className="why-us__content">
            <img
              src={WhyUsBC}
              alt="why-us-background"
              className="why-us__image"
            />
            <div className="why-use__why-choose">

              <div className="why-us__content-side1">
                <h3 className="why-us__title">
                  Best valued deals you will ever find
                </h3>
                <p className="why-us__text">
                  Discover the best deals you'll ever find with our unbeatable
                  offers. We're dedicated to providing you with the best value
                  for your money, so you can enjoy top-quality services and
                  products without breaking the bank. Our deals are designed to
                  give you the ultimate renting experience, so don't miss out on
                  your chance to save big.
                </p>
              </div>

              <div className="why-us__content-side2">
                <div className="why-us__inside-box">
                  <FontAwesomeIcon icon={faCar} className="why-us__icon" />
                  <div className="why-us__inside-box-inside">
                    <h3 className="why-us__subtitle">Cross Country Drive</h3>
                    <p className="why-us__subtext">
                      Take your driving experience to the next level with our
                      top-notch vehicles for your cross-country adventures.
                    </p>
                  </div>
                </div>
                <div className="why-us__inside-box">
                  <FontAwesomeIcon icon={faEuroSign} className="why-us__icon" />
                  <div className="why-us__inside-box-inside">
                    <h3 className="why-us__subtitle">All Inclusive Pricing</h3>
                    <p className="why-us__subtext">
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>
                <div className="why-us__inside-box">
                  <FontAwesomeIcon icon={faBan} className="why-us__icon" />
                  <div className="why-us__inside-box-inside">
                    <h3 className="why-us__subtitle">No Hidden Charges</h3>
                    <p className="why-us__subtext">
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default WhyUs;