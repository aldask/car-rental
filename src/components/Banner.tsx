import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faEuroSign, faBan } from "@fortawesome/free-solid-svg-icons";
import bannerPic from "../images/bannerPic.png";

function Banner() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="bannerBox">
            <img src={bannerPic} alt="bannerPic"></img>
            <div className="whyChoose">
              <div className="boxSide1">
                <h3>Best valued deals you will ever find</h3>
                <p>
                  Discover the best deals you'll ever find with our unbeatable
                  offers. We're dedicated to providing you with the best value
                  for your money, so you can enjoy top-quality services and
                  products without breaking the bank. Our deals are designed to
                  give you the ultimate renting experience, so don't miss out on
                  your chance to save big.
                </p>
              </div>
              <div className="boxSide2">
                <div className="insideBox">
                  <FontAwesomeIcon icon={faCar} className="icons" />
                  <div className="insideBoxInside">
                    <h3>Cross Country Drive</h3>
                    <p>
                      Take your driving experience to the next level with our
                      top-notch vehicles for your cross-country adventures.
                    </p>
                  </div>
                </div>
                <div className="insideBox">
                  <FontAwesomeIcon icon={faEuroSign} className="icons" />
                  <div className="insideBoxInside">
                    <h3>All Inclusive Pricing</h3>
                    <p>
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>
                <div className="insideBox align-top">
                  <FontAwesomeIcon icon={faBan} className="icons" />
                  <div className="insideBoxInside">
                    <h3>No Hidden Charges</h3>
                    <p>
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