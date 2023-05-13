import "../styles/Footer/footer-style.css";
import YT from "../images/Footer/yt.png";
import IG from "../images/Footer/ig.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <section className="footer footer--blue">
        <div className="container">
          <div className="footer__box">
            <ul className="footer__column footer__column--1">
              <li>
                <h3 className="footer__heading">
                  Car<span className="blue strong">O</span>
                </h3>
              </li>
              <li>
                <p className="footer__text footer__text--description">
                  Affordable car rentals with excellent customer service and a wide selection of reliable vehicles. Book now for convenient transportation!
                </p>
              </li>
              <li>
                <a href="tel:123456789" className="footer__link"><FontAwesomeIcon icon={faSquarePhone} />&nbsp;+123456789</a>
              </li>
              <li>
                <a href="mailto:support@caro.com" className="footer__link"><FontAwesomeIcon icon={faEnvelope} />&nbsp;support@caro.com</a>
              </li>
              <li className="footer__link-urls">
                <a href="https://instagram.com"><img src={IG} alt="instagram" /></a>
                <a href="https://youtube.com"><img src={YT} alt="youtube" /></a>
              </li>
            </ul>
            <ul className="footer__column footer__column--2">
              <li>
                <h3 className="footer__heading">Working Hours</h3>
              </li>
              <li>
                <p className="footer__text">Mon - Fri: 9:00AM - 9:00PM</p>
              </li>
              <li>
                <p className="footer__text">Sat: 9:00AM - 19:00PM</p>
              </li>
              <li>
                <p className="footer__text">Sun: Closed</p>
              </li>
            </ul>
            <ul className="footer__column footer__column--3">
              <li>
                <h3 className="footer__heading">Subscription</h3>
              </li>
              <li>
                <p className="footer__text">
                  Subscribe your Email address for latest news &amp; updates.
                </p>
              </li>
              <li>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="footer__input"
                ></input>
              </li>
              <li>
                <button className="footer__button">Subscribe</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;