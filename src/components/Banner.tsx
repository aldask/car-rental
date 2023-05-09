import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faEuroSign, faBan } from "@fortawesome/free-solid-svg-icons";
import bannerPic from "../images/bannerPic.png";

function Banner() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="banner__content">
            <img src={bannerPic} alt="bannerPic" className="banner__image" />
            <div className="banner__why-choose">
              <div className="banner__content-side1">
                <h3 className="banner__title">
                  Best valued deals you will ever find
                </h3>
                <p className="banner__text">
                  Discover the best deals you'll ever find with our unbeatable
                  offers. We're dedicated to providing you with the best value
                  for your money, so you can enjoy top-quality services and
                  products without breaking the bank. Our deals are designed to
                  give you the ultimate renting experience, so don't miss out on
                  your chance to save big.
                </p>
              </div>
              <div className="banner__content-side2">
                <div className="banner__inside-box">
                  <FontAwesomeIcon icon={faCar} className="banner__icon" />
                  <div className="banner__inside-box-inside">
                    <h3 className="banner__subtitle">Cross Country Drive</h3>
                    <p className="banner__subtext">
                      Take your driving experience to the next level with our
                      top-notch vehicles for your cross-country adventures.
                    </p>
                  </div>
                </div>
                <div className="banner__inside-box">
                  <FontAwesomeIcon icon={faEuroSign} className="banner__icon" />
                  <div className="banner__inside-box-inside">
                    <h3 className="banner__subtitle">All Inclusive Pricing</h3>
                    <p className="banner__subtext">
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>
                <div className="banner__inside-box banner__align-top">
                  <FontAwesomeIcon icon={faBan} className="banner__icon" />
                  <div className="banner__inside-box-inside">
                    <h3 className="banner__subtitle">No Hidden Charges</h3>
                    <p className="banner__subtext">
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

export default Banner;